// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

contract LuckyMango {
    address public owner;

    enum Rarity { Common, Epic, Rare }

    struct Prize {
        uint256 amount;
        bool claimed;
        Rarity rarity;
    }

    struct Item {
        string name;
        uint256 price;
        uint256 power;
    }

    struct PlayerStats {
        uint256 totalWins;
        uint256 totalSpent;
        uint256 lastPlay;
    }

    // ---------- Multi-session state ----------
    mapping(address => uint256) public sessionCount; // number of sessions per player
    mapping(address => mapping(uint256 => Prize[])) private sessionPrizes; // prizes per session
    mapping(address => mapping(uint256 => uint256)) public sessionPicks; // picks per session
    mapping(address => mapping(uint256 => uint256[])) private sessionRevealed; // revealed indexes per session
    mapping(address => mapping(uint256 => bool)) public sessionFinished; // finished flag per session

    // ---------- Legacy/other state ----------
    mapping(address => PlayerStats) public playerStats;
    mapping(uint256 => uint256) public ticketPrices;
    mapping(address => Item[]) public ownedItems;

    // ---------- Events ----------
    event TicketBought(address indexed player, uint256 indexed sessionId, uint256 picks, uint256 price);
    event RewardClaimed(address indexed player, uint256 indexed sessionId, uint256 totalReward, uint256[] indexes);
    event SessionAbandoned(address indexed player, uint256 indexed sessionId);
    event ItemBought(address indexed player, string name, uint256 price, uint256 power);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    constructor() {
        owner = msg.sender;
        ticketPrices[1] = 2000 ether;
        ticketPrices[2] = 3800 ether;
        ticketPrices[3] = 5400 ether;
        ticketPrices[4] = 6800 ether;
        ticketPrices[5] = 8000 ether;
    }

    // ---------- Core game: buy a new session ----------
    function buyTickets(uint256 picks, Prize[] calldata prizes) external payable {
        require(picks >= 1 && picks <= 5, "Invalid pick count");
        require(msg.value == ticketPrices[picks], "Incorrect payment");
        require(prizes.length == 20, "Must assign 20 prizes");

        // create new session
        uint256 sessionId = ++sessionCount[msg.sender];
        sessionPicks[msg.sender][sessionId] = picks;

        // copy prizes into storage for the session
        for (uint256 i = 0; i < prizes.length; i++) {
            sessionPrizes[msg.sender][sessionId].push(prizes[i]);
        }

        // stats
        playerStats[msg.sender].totalSpent += msg.value;
        playerStats[msg.sender].lastPlay = block.timestamp;

        emit TicketBought(msg.sender, sessionId, picks, msg.value);
    }

    // ---------- Confirm selection for a specific session ----------
    function confirmSelection(uint256 sessionId, uint256[] calldata indexes) external {
        require(sessionId > 0 && sessionId <= sessionCount[msg.sender], "Invalid session");
        require(!sessionFinished[msg.sender][sessionId], "Session finished");
        require(indexes.length == sessionPicks[msg.sender][sessionId], "Invalid selection count");

        Prize[] storage pool = sessionPrizes[msg.sender][sessionId];
        uint256 totalReward = 0;

        for (uint256 i = 0; i < indexes.length; i++) {
            uint256 index = indexes[i];
            require(index < pool.length, "Invalid index");
            Prize storage prize = pool[index];
            require(!prize.claimed, "Already claimed");

            prize.claimed = true;
            sessionRevealed[msg.sender][sessionId].push(index);
            totalReward += prize.amount;
        }

        require(address(this).balance >= totalReward, "Insufficient pool");
        payable(msg.sender).transfer(totalReward);

        // mark session finished and update stats
        sessionFinished[msg.sender][sessionId] = true;
        playerStats[msg.sender].totalWins += indexes.length;
        playerStats[msg.sender].lastPlay = block.timestamp;

        emit RewardClaimed(msg.sender, sessionId, totalReward, indexes);
    }

    // ---------- Abandon a session without refund ----------
    // ใช้เมื่อผู้เล่นกด Confirm แต่ cancel ที่ wallet → frontend เรียกฟังก์ชันนี้เพื่อเคลียร์ state
    function abandonSession(uint256 sessionId) external {
        require(sessionId > 0 && sessionId <= sessionCount[msg.sender], "Invalid session");
        require(!sessionFinished[msg.sender][sessionId], "Session finished");

        // mark finished; picks set to 0 to indicate closed
        sessionFinished[msg.sender][sessionId] = true;
        sessionPicks[msg.sender][sessionId] = 0;
        delete sessionPrizes[msg.sender][sessionId];
        delete sessionRevealed[msg.sender][sessionId];

        emit SessionAbandoned(msg.sender, sessionId);
    }

    // ---------- Items shop ----------
    function buyItem(Item calldata item) external payable {
        require(item.price > 0, "Invalid item");
        require(msg.value == item.price, "Incorrect payment");

        ownedItems[msg.sender].push(item);
        playerStats[msg.sender].totalSpent += msg.value;

        emit ItemBought(msg.sender, item.name, item.price, item.power);
    }

    // ---------- Views ----------
    function getSessionPrizes(uint256 sessionId) external view returns (Prize[] memory) {
        return sessionPrizes[msg.sender][sessionId];
    }

    function getSessionRevealed(uint256 sessionId) external view returns (uint256[] memory) {
        return sessionRevealed[msg.sender][sessionId];
    }

    function getPlayerSessionCount(address player) external view returns (uint256) {
        return sessionCount[player];
    }

    function getPoolBalance() external view returns (uint256) {
        return address(this).balance;
    }

    // ---------- Owner pool management ----------
    function depositToPool() external payable onlyOwner {
        require(msg.value > 0, "Must send SHIDO");
    }

    function withdrawAmount(uint256 amount) external onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        require(address(this).balance >= amount, "Insufficient pool");
        payable(owner).transfer(amount);
    }

    function withdrawAll() external onlyOwner {
        payable(owner).transfer(address(this).balance);
    }

    receive() external payable {}
}
