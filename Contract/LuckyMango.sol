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

    mapping(address => Prize[]) public assignedPrizes;
    mapping(address => bool) public hasPurchased;
    mapping(address => uint256) public userPicks;
    mapping(address => uint256[]) public revealedIndexes;
    mapping(address => PlayerStats) public playerStats;
    mapping(uint256 => uint256) public ticketPrices;
    mapping(address => Item[]) public ownedItems;

    // ✅ Events สำหรับบันทึกกิจกรรมบน blockchain
    event TicketBought(address indexed player, uint256 picks, uint256 price);
    event RewardClaimed(address indexed player, uint256 totalReward, uint256[] indexes);
    event TicketRefunded(address indexed player, uint256 refundAmount);
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

    function buyTickets(uint256 picks, Prize[] calldata prizes) external payable {
        require(!hasPurchased[msg.sender], "Already purchased");
        require(picks >= 1 && picks <= 5, "Invalid pick count");
        require(msg.value == ticketPrices[picks], "Incorrect payment");
        require(prizes.length == 20, "Must assign 20 prizes");

        hasPurchased[msg.sender] = true;
        userPicks[msg.sender] = picks;

        delete assignedPrizes[msg.sender];
        for (uint256 i = 0; i < prizes.length; i++) {
            assignedPrizes[msg.sender].push(prizes[i]);
        }

        playerStats[msg.sender].totalSpent += msg.value;
        playerStats[msg.sender].lastPlay = block.timestamp;

        emit TicketBought(msg.sender, picks, msg.value); // ✅ บันทึกการซื้อบัตร
    }

    function confirmSelection(uint256[] calldata indexes) external {
        require(hasPurchased[msg.sender], "No ticket");
        require(indexes.length == userPicks[msg.sender], "Invalid selection count");

        Prize[] storage pool = assignedPrizes[msg.sender];
        uint256 totalReward = 0;

        for (uint256 i = 0; i < indexes.length; i++) {
            uint256 index = indexes[i];
            require(index < pool.length, "Invalid index");
            Prize storage prize = pool[index];
            require(!prize.claimed, "Already claimed");

            prize.claimed = true;
            revealedIndexes[msg.sender].push(index);
            totalReward += prize.amount;
        }

        require(address(this).balance >= totalReward, "Insufficient pool");
        payable(msg.sender).transfer(totalReward);

        playerStats[msg.sender].totalWins += indexes.length;
        playerStats[msg.sender].lastPlay = block.timestamp;

        hasPurchased[msg.sender] = false;
        userPicks[msg.sender] = 0;

        emit RewardClaimed(msg.sender, totalReward, indexes); // ✅ บันทึกการโอนรางวัล
    }

    function resetAndRefund() external {
        require(hasPurchased[msg.sender], "No ticket");
        uint256 refundAmount = ticketPrices[userPicks[msg.sender]];
        require(refundAmount > 0, "Invalid refund");

        payable(msg.sender).transfer(refundAmount);

        hasPurchased[msg.sender] = false;
        userPicks[msg.sender] = 0;
        delete assignedPrizes[msg.sender];
        delete revealedIndexes[msg.sender];

        emit TicketRefunded(msg.sender, refundAmount); // ✅ บันทึกการคืนเงิน
    }

    function buyItem(Item calldata item) external payable {
        require(item.price > 0, "Invalid item");
        require(msg.value == item.price, "Incorrect payment");

        ownedItems[msg.sender].push(item);
        playerStats[msg.sender].totalSpent += msg.value;

        emit ItemBought(msg.sender, item.name, item.price, item.power); // ✅ บันทึกการซื้อไอเท็ม
    }

    function getAssignedPrizes() external view returns (Prize[] memory) {
        return assignedPrizes[msg.sender];
    }

    function getRevealedIndexes() external view returns (uint256[] memory) {
        return revealedIndexes[msg.sender];
    }

    function getOwnedItems() external view returns (Item[] memory) {
        return ownedItems[msg.sender];
    }

    function getPoolBalance() external view returns (uint256) {
        return address(this).balance;
    }

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
