import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import { ethers } from "ethers";
import { useAccount, useDisconnect } from "wagmi"; 
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { CONTRACT_ADDRESS, getContract } from "./utils/contract";
import { useContract } from "./hooks/useContract";
import { useWallet } from "./hooks/useWallet";
import { abi } from "../Contract/ABI";
import PoolBalance from './components/PoolBalance';

import bgImage from './assets/background.png';
import mangoIcon from './assets/moon-icon.png';
import mascotWin from './assets/mascot-win.png';
import mascotLose from './assets/mascot-lose.png';
import logo from './assets/TogetherWeMoon-logo.png';
import ticketIcon from './assets/ticket-icon.png';

import homeIcon from './assets/homeIcon.png';
import howtoIcon from './assets/howtoIcon.png';
import itemIcon from './assets/ItemIcon.png';
import walletIcon from './assets/WalletIcon.png';
import Texture from './assets/Texture.png';
import bgMusic from './assets/JazzduoCard.mp3';

import WalletStatus from "./components/WalletStatus";




// ✅ เพิ่ม type สำหรับ window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}


function App() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [showHowToModal, setShowHowToModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showGuardModal, setShowGuardModal] = useState(false); 
  const [guardMessage, setGuardMessage] = useState("");
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [showMascotModal, setShowMascotModal] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [mascotStatus, setMascotStatus] = useState<'win' | 'lose' | null>(null);
  const [ticketPrice, setTicketPrice] = useState(0);
  const [totalReward, setTotalReward] = useState(0);
  const [revealedIndexes, setRevealedIndexes] = useState<number[]>([]);
  const [picksTotal, setPicksTotal] = useState(0);
  const [picksAvailable, setPicksAvailable] = useState(0);
  const [pickedIndexes, setPickedIndexes] = useState<number[]>([]);
  const [rewardsWon, setRewardsWon] = useState<string[]>([]);
  const [prizePool, setPrizePool] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameLocked, setGameLocked] = useState(false);

  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [currentSessionId, setCurrentSessionId] = useState<number | null>(null); 
  const [isTxPending, setIsTxPending] = useState<boolean>(false);
  const [isBuyDisabled, setIsBuyDisabled] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  const { address, isConnected } = useAccount(); 
  const { disconnect } = useDisconnect(); 
  const { open } = useWeb3Modal();
  const [hasPendingTicket, setHasPendingTicket] = useState(false);
  const [sessionId, setSessionId] = useState<number | null>(null);
  const [localwalletAddress, setlocalWalletAddress] = useState<string | null>(null); 
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);

  // ✅ เปิด modal เมื่อ component ถูก mount
  useEffect(() => {
    setShowAnnouncement(true);
  }, []);

  
    // ✅ เล่นเพลงพื้นหลังครั้งแรก
    useEffect(() => {
      if (audioRef.current) {
        audioRef.current.loop = true; // เล่นวน
        audioRef.current.play().catch(err => {
          console.log("Autoplay blocked:", err);
        });
      }
    }, []);

    // ✅ toggle mute/unmute (ใช้ได้ตลอด แม้หลังเกมจบ)
    const toggleMute = () => {
      if (audioRef.current) {
        audioRef.current.muted = !audioRef.current.muted;
        setIsMuted(audioRef.current.muted);

        if (!audioRef.current.muted) {
          audioRef.current.play().catch(err => {
            console.log("Play failed:", err);
          });
        }
      }
    };

    // ✅ Modal Win/Lose → เล่นเสียงพิเศษ แต่ไม่ reset mute state
    useEffect(() => {
      if (showMascotModal && audioRef.current && !isMuted) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => {
          console.error("Audio play failed:", err);
        });
      }
    }, [showMascotModal, mascotStatus, isMuted]);

    // ✅ Hover sound
    const playHoverSound = () => {
      if (isMuted) return;
      const audio = new Audio(`${import.meta.env.BASE_URL}Hover.mp3`);
      audio.play().catch(err => console.error("Hover sound failed:", err));
    };

    // ✅ Click sound
    const playClickSound = () => {
      if (isMuted) return;
      const audio = new Audio(`${import.meta.env.BASE_URL}Confirm.mp3`);
      audio.play().catch(err => console.error("Click sound failed:", err));
    };



    // ✅ Admin
    const { walletAddress, connectShidoNetwork, isAdmin, getProviderAndSigner } =
      useWallet("0x493ae9f967fc9af80fb7ba7b30ed32a9e3c80b85"); // ใส่ address ของ Admin จริง

    const ADMIN_ADDRESS = "0x493ae9f967fc9af80fb7ba7b30ed32a9e3c80b85"; // ✅ เปลี่ยนเป็น address ของคุณ



      // ✅ ฟังก์ชันแปลง string รางวัล → Prize object ที่ใช้หน่วย ether
      const convertPrizeStringToPrize = (prizeStr: string) => {
        const match = prizeStr.match(/(\d+)/);
        const value = match ? match[1] : "0";
        return {
          amount: ethers.parseUnits(value, 18), // ใช้หน่วยเดียวกับตอนซื้อตั๋ว
          claimed: false,
          rarity: 0
        };
      };

      // ตารางราคาตั๋วให้ตรงกับ contract
      const TICKET_OPTIONS = [
        { picks: 1, price: 2000 },
        { picks: 2, price: 3800 },
        { picks: 3, price: 5400 },
        { picks: 4, price: 6800 },
        { picks: 5, price: 8000 },
      ];

      // โหลด state จาก localStorage ตอน mount (เริ่มซื้อตั๋ว)
      useEffect(() => {
        if (!walletAddress) return; // ❌ ไม่มี wallet → ไม่โหลดเกม

        const sid = localStorage.getItem("sessionId");
        const started = localStorage.getItem("gameStarted");
        const price = localStorage.getItem("ticketPrice");
        const picksTotal = localStorage.getItem("picksTotal");
        const picksAvailable = localStorage.getItem("picksAvailable");

        if (sid) setCurrentSessionId(Number(sid));
        if (started) setGameStarted(started === "true");
        if (price) setTicketPrice(Number(price));
        if (picksTotal) setPicksTotal(Number(picksTotal));
        if (picksAvailable) setPicksAvailable(Number(picksAvailable));
      }, [walletAddress]); // ✅ ให้รันใหม่เมื่อ walletAddress เปลี่ยน

    
    // ✅ connectWallet รองรับหลาย browser/wallet (MetaMask ตรง ๆ)
    const connectWallet = async () => {
      try {
        if (typeof window.ethereum !== "undefined" && window.ethereum.isMetaMask) {
          // ✅ กรณีเปิดจาก browser ที่มี MetaMask inject (เช่น Desktop หรือ Mobile browser ที่รองรับ)
          const accounts: string[] = await window.ethereum.request({
            method: "eth_requestAccounts",
          });

          if (accounts.length > 0) {
            const address = accounts[0];
            setlocalWalletAddress(address);
            console.log("Connected MetaMask wallet:", address);

            const browserProvider = new ethers.BrowserProvider(window.ethereum);
            setProvider(browserProvider);
          }
        } else {
          // ✅ กรณีเปิดจาก mobile browser ที่ไม่มี inject → redirect ไป MetaMask app
          const dappUrl = encodeURIComponent(window.location.href);
          const metamaskDeepLink = `https://metamask.app.link/dapp/${dappUrl}`;
          window.location.href = metamaskDeepLink;
        }
      } catch (err) {
        console.error("Wallet connection failed:", err);
      }
    };


  

  
      
      // ✅ ซื้อตั๋ว
      const handleBuyTicket = async (picks: number): Promise<boolean> => {
        try {
          // ✅ Guard: ต้องมี walletAddress ก่อน
          if (!walletAddress) {
            setGuardMessage("Please connect your wallet first!");
            setShowGuardModal(true);
            return false;
          }

          // Guard: ถ้ามีตั๋วเดิมอยู่แล้ว ห้ามซื้อใหม่
          if (gameStarted && currentSessionId !== null) {
            setGuardMessage("You already have an active ticket. Finish the game first!");
            setShowGuardModal(true);
            return false;
          }

          const contract = await getContract();
          const option = TICKET_OPTIONS.find(o => o.picks === picks);
          if (!option) return false;
          const price = option.price;

          setIsTxPending(true);

          const tx = await contract["buyTickets"](picks, {
            value: ethers.parseUnits(price.toString(), 18),
          });

          const receipt = await tx.wait().catch(() => {
            // ❌ ถ้า cancel → reset กลับหน้าแรก
            resetGame();
            return null;
          });
          if (!receipt) return false;

          // ✅ ถ้า confirm สำเร็จ
          const sessionCount: bigint = await contract["getPlayerSessionCount"](walletAddress);
          const sessionId = Number(sessionCount);
          setCurrentSessionId(sessionId);

          setGameStarted(true);
          setPicksAvailable(picks);
          setPicksTotal(picks);
          setTicketPrice(price);
          setPickedIndexes([]);
          setGameLocked(false);

          // ✅ Save ลง localStorage
          localStorage.setItem("sessionId", String(sessionId));
          localStorage.setItem("gameStarted", "true");
          localStorage.setItem("ticketPrice", String(price));
          localStorage.setItem("picksTotal", String(picks));
          localStorage.setItem("picksAvailable", String(picks));

          return true;
        } finally {
          setIsTxPending(false);
        }
      };


        // ✅ เลือกรางวัล
        const handlePick = (index: number): void => {
        if (!walletAddress || !gameStarted || gameLocked) { 
          setGuardMessage("Please connect your wallet and buy tickets first!"); 
          setShowGuardModal(true); 
          return;
        }

        if (pickedIndexes.includes(index)) {
          setPickedIndexes(pickedIndexes.filter(i => i !== index));
          setPicksAvailable(picksAvailable + 1);
        } else {
          if (picksAvailable > 0) {
            setPickedIndexes([...pickedIndexes, index]);
            setPicksAvailable(picksAvailable - 1);
          }
        }
      };


      // Check ตั๋วค้าง reset
      useEffect(() => {
        const checkPendingTicket = async () => {
          if (!isConnected || !address) return;

          try {
            const contract = await getContract();
            // ✅ ดึงจำนวน session ของผู้เล่น
            const sessionCount: bigint = await contract.getPlayerSessionCount(address);

            if (sessionCount > 0n) {
              // ✅ ดึง session ล่าสุด
              const currentSession = await contract.getSession(address, sessionCount);
              if (currentSession.active) {
                setHasPendingTicket(true);
                setSessionId(Number(sessionCount));
              } else {
                setHasPendingTicket(false);
                setSessionId(null);
              }
            }
          } catch (err) {
            console.error("Check pending ticket failed:", err);
          }
        };

        checkPendingTicket();
      }, [isConnected, address]);

      // ✅ ตรวจสอบ stuck frontend → reset อัตโนมัติ 
      useEffect(() => { 
        if (gameStarted && picksAvailable === 0 && pickedIndexes.length === 0) { 
          console.warn("Detected stuck ticket, resetting game..."); 
          resetGame();
         } 
        }, [gameStarted, picksAvailable, pickedIndexes]);

      const handleResume = () => {
        alert(`Resuming game with sessionId ${sessionId}`);
        // ✅ โหลด state จาก contract/localStorage แล้วให้ผู้เล่นเล่นต่อ
      };

      const handleReset = () => {
        alert("Resetting game...");
        resetGame(); // ✅ เคลียร์ state + localStorage จริง
        setHasPendingTicket(false);
        setSessionId(null);
        // ✅ เรียก resetGame() ของคุณ
      };



      // ✅ เริ่มเล่น
      const handleStart = async (): Promise<void> => {
        // ✅ ต้องมี walletAddress และซื้อตั๋วสำเร็จ 
        if (!walletAddress || !gameStarted || currentSessionId == null) {
          setGuardMessage("You must connect your wallet and buy tickets first!"); 
          setShowGuardModal(true); setGuardMessage
          setShowGuardModal(true);
          return;
        }

        // ✅ ต้องเลือกกล่องครบ และไม่ติด lock 
        if (pickedIndexes.length === 0 || gameLocked || isTxPending) return;

        // ✅ เตรียมกล่องรางวัลไว้ แต่ยังไม่เฉลย
        const totalBoxes = 20;
        const newPrizes: string[] = [];
        const pool: string[] = [
          '🎉 10000 SHIDO',
          '🎉 7000 SHIDO',
          '🎉 5000 SHIDO',
          ...Array(7).fill('🎉 400 SHIDO'),
          ...Array(10).fill('🎉 200 SHIDO'),
        ];

        for (let i = 0; i < totalBoxes; i++) {
          const randomIndex = Math.floor(Math.random() * pool.length);
          newPrizes.push(pool[randomIndex]);
          pool.splice(randomIndex, 1);
        }

        // ✅ คำนวณรางวัลรวม
        const totalRewardCalc = pickedIndexes.reduce((sum, i) => {
          const match = newPrizes[i]?.toString().match(/(\d+)/);
          const value = match ? parseInt(match[1]) : 0;
          return sum + value;
        }, 0);
        setTotalReward(totalRewardCalc);

        setGameLocked(true); // ล็อกระหว่างรอ wallet

        // ✅ Confirm selection on-chain
        const ok = await confirmSelectionOnChain(
          currentSessionId,
          ethers.parseUnits(totalRewardCalc.toString(), 18)
        );

        if (ok) {
          // ✅ เฉลยรางวัลหลังจาก wallet confirm สำเร็จ
          setRewardsWon(newPrizes);
          setPrizePool(pool);
          setRevealedIndexes(pickedIndexes);
          setShowSummaryModal(true);

          // ✅ เปิด MascotModal เฉลยผล
          const isWinning = totalRewardCalc > ticketPrice;
          setMascotStatus(isWinning ? "win" : "lose");
          setIsBuyDisabled(true); // ✅ ปิดปุ่ม Buy Ticket ตอนเปิด MascotModal


          // ✅ เคลียร์ localStorage เพื่อให้ซื้อใหม่ได้
          // ❌ ไม่ลบ sessionId/gameStarted ออกจาก localStorage
          // เก็บไว้เพื่อให้ connect ใหม่ยังเล่นต่อได้
          localStorage.setItem("sessionId", currentSessionId.toString()); 
          localStorage.setItem("gameStarted", "true"); 
          localStorage.setItem("ticketPrice", ticketPrice.toString()); 
          localStorage.setItem("picksTotal", picksTotal.toString()); 
          localStorage.setItem("picksAvailable", picksAvailable.toString());

          setGameStarted(false); // ปิดเกมจนกว่าจะ reconnect
          setCurrentSessionId(null);
        } else {
          // ❌ ถ้า cancel → กลับมาเล่นใหม่ได้
          setGameLocked(false);
        }
      };

      // ✅ confirmSelectionOnChain
      const confirmSelectionOnChain = async (sessionId: number, totalReward: bigint) => {
        try {
          const contract = await getContract();
          setIsTxPending(true);

          // เรียก confirmSelection(sessionId, totalReward)
          const tx = await contract["confirmSelection"](sessionId, totalReward, { gasLimit: 300000 });

          // ✅ รอ wallet confirm/cancel
          const receipt = await tx.wait().catch((err: any) => {
            console.error("Confirm cancelled:", err);
            // ❌ ถ้า cancel → กลับมาเล่นใหม่ได้
            setGameLocked(false);
            return null;
          });

          if (!receipt) return false; // ออกจากฟังก์ชันถ้า cancel

          // ✅ ถ้า confirm สำเร็จ → โอนรางวัลเสร็จ 
          setShowRewardModal(true); // เปิด modal แทน alert


          return true;
        } catch (err: any) {
          console.error("confirmSelection failed:", err);
          setGameLocked(false); // ให้กลับมาเล่นใหม่ได้
          return false;
        } finally {
          setIsTxPending(false);
        }
      };

      // ✅ Reset state frontend
      const resetGame = (): void => {
        setPicksTotal(0);
        setPicksAvailable(0);
        setPickedIndexes([]);
        setRewardsWon([]);
        setPrizePool([]);
        setGameStarted(false);   // Require buy again
        setGameLocked(false);
        setShowSummaryModal(false);
        setIsBuyDisabled(false); // ✅ เปิดปุ่ม Buy Ticket กลับมาเป็นสีเขียว
        setTotalReward(0);
        setCurrentSessionId(null);
        setRevealedIndexes([]); // ✅ เคลียร์กล่องที่เคยเปิด 
        setMascotStatus(null); // ✅ เคลียร์สถานะ win/lose 
        setShowRewardModal(false); // ✅ ปิด modal รางวัล

        // ✅ เคลียร์ localStorage ด้วย
        localStorage.removeItem("sessionId");
        localStorage.removeItem("gameStarted");
        localStorage.removeItem("ticketPrice");
        localStorage.removeItem("picksTotal");
        localStorage.removeItem("picksAvailable");
      };

      const getTotalShido = (): number => {
        return rewardsWon.reduce((total, prize) => {
          const match = prize.match(/(\d+)/);
          return match ? total + parseInt(match[1]) : total;
        }, 0);
      };



  return (
    <div className="container">

      <div className="logo-header">
        <img src={logo} alt="TogetherWeMoon logo" className="logo" loading="lazy" />

        {/* ✅ Wallet Status */}
        {isConnected && address && (
          <div className="wallet-status">
            <span className="wallet-address">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
          </div>
        )}


        {/* ✅ Announcement Button */}
        <button className="announcement-btn" onClick={() => setShowAnnouncement(true)} onMouseEnter={playHoverSound} onTouchStart={playHoverSound}  >
          🪧
        </button>


      </div>


      <div className="status-bar">
        <div className="status-left">🎟️ Picks: {picksTotal - picksAvailable}/{picksTotal}</div>

        {/* ✅ เพลงพื้นหลัง (ไฟล์อยู่ใน public/music.mp3) */}
        <audio ref={audioRef} src={bgMusic} autoPlay loop muted />
        {/* ✅ ไอคอนลำโพงที่มุมจอ */}
        <button
          onClick={toggleMute}
          onMouseEnter={playHoverSound} onTouchStart={playHoverSound}
          className="sound-toggle-btn"
          style={{
            border: 'none', fontSize: '28px', cursor: 'pointer'
          }} >
          {isMuted ? "🔇" : "🔊"}
        </button>

        
      </div>


      <div className="mango-grid">
        {Array.from({ length: 4 }).map((_, rowIndex) => (
          <div key={rowIndex} className="mango-row">
            {Array.from({ length: 5 }).map((_, colIndex) => {
              const index = rowIndex * 5 + colIndex;
              const isPicked = pickedIndexes.includes(index);
              const reward = gameLocked ? rewardsWon[index] : null;

              return (
                <button
                  key={index}
                  className={`mango-btn ${gameLocked ? (isPicked ? 'revealed-picked bounce' : 'revealed-unpicked faded') : ''}`}
                  onClick={() => handlePick(index)}
                  
                  disabled={gameLocked}
                  style={{
                    opacity: isPicked ? 1 : 0.8,
                    border: `6px solid ${isPicked ? '#4caf50' : '#fcfcfbff'}`,
                    backgroundColor: gameLocked ? 'rgba(255, 253, 231, 1)' : undefined,
                  }}
                >
                  {gameLocked && reward ? (
                    <span className="reward-text">{reward}</span>
                  ) : (
                    <img src={mangoIcon} alt="Mango" className="mango-img" loading="lazy" />
                  )}

                </button>
              );
            })}
          </div>
        ))}


            {/* ✅ ถ้าตั๋วค้าง */}
            <div style={{ color: "white", textAlign: "center" }}>
              {hasPendingTicket && (
                <div>
                  <p>You have a pending ticket. (Session {sessionId})</p>
                  <button
                    onClick={handleResume}
                    style={{
                      margin: "5px",
                      padding: "8px 14px",
                      backgroundColor: "#4caf50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Resume Game
                  </button>
                  <button
                    onClick={handleReset}
                    style={{
                      margin: "5px",
                      padding: "8px 14px",
                      backgroundColor: "#f44336",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer"
                    }}
                  >
                    Reset Game
                  </button>
                </div>
              )}
            </div>




        <div className="button-group">
          {/* ✅ Buy Ticket Button */}
          <button
            className={`buy-ticket-btn ${gameStarted || picksAvailable > 0 || gameLocked ? 'disabled' : 'active'
              }`}
            onClick={() => setShowTicketModal(true)}
            
            disabled={gameStarted || picksAvailable > 0 || gameLocked}
          >
            Buy Ticket
          </button>



          {/* ✅ Confirm Button */}
          <button
            className={`confirm-btn ${gameStarted &&
                !gameLocked &&
                picksAvailable === 0 &&
                pickedIndexes.length === picksTotal
                ? "active"
                : "disabled"
              }`}
            onClick={() => {
              playClickSound();   // ✅ เล่นเสียงตอนคลิก
              handleStart();      // ✅ logic เดิม
            }}
            disabled={
              !gameStarted ||
              gameLocked ||
              picksAvailable !== 0 ||
              pickedIndexes.length !== picksTotal
            }
          >
            Confirm
          </button>


          </div>



        {/* ✅ Bottom Navigation with icons */}
        <div
          className="bottom-nav"
          style={{
            backgroundImage: `url(${Texture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <button className="nav-btn" onClick={() => {
            if (isAdmin) {
              setShowAdminModal(true);
            }
          }}
          
          >
            <img src={homeIcon} alt="Home" className="nav-icon" />
          </button>
          <button className="nav-btn" onClick={() => setShowHowToModal(true)}  >
            <img src={howtoIcon} alt="How To" className="nav-icon" />
          </button>
          <button className="nav-btn" onClick={() => setShowItemModal(true)}  >
            <img src={itemIcon} alt="Item" className="nav-icon" />
          </button>
          {/* ปุ่มเปิด modal */}
          <button className="nav-btn" onClick={() => setShowWalletModal(true)}  >
            <img src={walletIcon} alt="Wallet" className="nav-icon" />
          </button>

        </div>





      </div>

      {/* ✅ Modal Part____________________________________________________________________________________ */}

      {/* ✅ Announcement Modal */}
      {showAnnouncement && (
        <div
          className="announcement-modal-overlay"
          onClick={() => {
            setShowAnnouncement(false);

            // ✅ เปิดเสียงพื้นหลังหลังจากปิด modal
            if (audioRef.current) {
              audioRef.current.muted = false;
              setIsMuted(false);
              audioRef.current.play().catch(err =>
                console.error("Background play failed:", err)
              );
            }
          }}
        >
          <div
            className="announcement-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="announcement-title">🎉 Welcome to TogrtherWeMoon</h2>
            <p className="announcement-message">
              Stay tuned for upcoming events and prize updates
            </p>
            <button
              className="announcement-close-btn"
              onClick={() => {
                setShowAnnouncement(false);

                // ✅ เปิดเสียงพื้นหลังหลังจากกด Close
                if (audioRef.current) {
                  audioRef.current.muted = false;
                  setIsMuted(false);
                  audioRef.current.play().catch(err =>
                    console.error("Background play failed:", err)
                  );
                }

              {/*}  // ✅ เล่นเสียงคลิกถ้าไม่ mute
                if (!isMuted) {
                  playClickSound();
                }
              }}
              onMouseEnter={() => {
                if (!isMuted) playHoverSound();
              }}
              onTouchStart={() => {
                if (!isMuted) playHoverSound();    */}
              }} 
            >
              Close
            </button>
          </div>
        </div>
      )}


      {/* ✅ Admin Modal */}
      {showAdminModal && (
        <div className="admin-modal-overlay" onClick={() => setShowAdminModal(false)}>
          <div className="admin-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="admin-modal-title">🛠️ Admin Panel</h2>
            <p className="admin-modal-message">Welcome, Admin!</p>

            {/* ✅ เพิ่มฟังก์ชัน admin ได้ที่นี่ เช่น Reset Leaderboard, View Stats, etc. */}
            {/* ✅ แสดงยอดเงินใน Pool โดยตรง */}
            <PoolBalance />

            {/* ✅ ฟังก์ชันเติมเงินเข้า Pool */}
            {/* ✅ ช่องกรอกจำนวนสำหรับฝาก */}
            <div>
              <input
                type="number"
                step="0.01"
                placeholder="Amount to deposit (SHIDO)"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <button onClick={async () => {
                try {
                  const provider = new ethers.BrowserProvider(window.ethereum);
                  const signer = await provider.getSigner();
                  const tx = await signer.sendTransaction({
                    to: CONTRACT_ADDRESS,
                    value: ethers.parseEther(depositAmount || "0"),
                  });
                  await tx.wait();
                  alert(`Deposited ${depositAmount} SHIDO into pool`);
                } catch (err) {
                  console.error(err);
                  alert("Deposit failed");
                }
              }}
              >
                Deposit to Pool
              </button>
            </div>

            {/* ✅ ฟังก์ชันถอนเงินออกจาก Pool (Admin เท่านั้น) */}
            {/* ✅ ช่องกรอกจำนวนสำหรับถอน */}
            <div>
              <input
                type="number"
                step="0.01"
                placeholder="Amount to withdraw (SHIDO)"
                value={withdrawAmount} onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <button onClick={async () => {
                try {
                  const contract = await getContract();
                  // ✅ เรียกชื่อฟังก์ชันให้ตรงกับ contract
                  const tx = await contract.withdrawAmount(
                    ethers.parseEther(withdrawAmount || "0")
                  );
                  await tx.wait();
                  alert(`Withdrawn ${withdrawAmount} SHIDO from pool`);
                } catch (err) {
                  console.error(err);
                  alert("Withdraw failed");
                }
              }}
              >
                Withdraw from Pool
              </button>

            </div>

            {/* ✅ ฟังก์ชันถอนเงินทั้งหมดออกจาก Pool */}
            <div>
              <button onClick={async () => {
                try {
                  const contract = await getContract();
                  const tx = await contract.withdrawAll(); // เรียกฟังก์ชัน withdrawAll จาก contract
                  await tx.wait();
                  alert("All funds withdrawn from pool");
                } catch (err) {
                  console.error(err);
                  alert("Withdraw all failed");
                }
              }}
              >
                Withdraw All
              </button>
            </div>

            <button className="admin-modal-close-btn" onClick={() => setShowAdminModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}



      {/* ✅ Ticket Modal */}
      {showTicketModal && (
        <div className="ticket-modal-overlay" onClick={() => setShowTicketModal(false)}>
          <div className="ticket-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={ticketIcon} alt="Ticket Icon" className="ticket-modal-icon" loading="lazy" />
            <h2 className="ticket-modal-title">🎟️ Choose Your Ticket</h2>
            <ul className="ticket-modal-list">
              {[
                { price: 2000, picks: 1 },
                { price: 3800, picks: 2 },
                { price: 5400, picks: 3 },
                { price: 6800, picks: 4 },
                { price: 8000, picks: 5 }
              ].map((ticket, index) => (
                <li key={index} className="ticket-modal-item">
                  💰 {ticket.price} SHIDO → {ticket.picks} pick{ticket.picks > 1 ? 's' : ''}
                  <button
                    className="ticket-modal-buy-btn"
                    onClick={async () => {
                      playClickSound();

                      // ✅ เรียก smart contract เพื่อซื้อจริง
                      const success = await handleBuyTicket(ticket.picks);

                      // ✅ ปิด modal ไม่ว่าจะ confirm หรือ cancel
                      setShowTicketModal(false);

                      // ✅ อัปเดต state frontend เฉพาะเมื่อซื้อสำเร็จจริง
                      if (success) {
                        setPicksTotal(ticket.picks);
                        setPicksAvailable(ticket.picks);
                        setTicketPrice(ticket.price);
                        setGameStarted(true);
                        setGameLocked(false);
                        setPrizePool([
                          '🎉 10000 SHIDO',
                          '🎉 7000 SHIDO',
                          '🎉 5000 SHIDO',
                          ...Array(7).fill('🎉 400 SHIDO'),
                          ...Array(10).fill('🎉 200 SHIDO')
                        ]);
                      }
                    }}
                    //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound} 
                    //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
                  >
                    Buy
                  </button>

                </li>
              ))}
            </ul>

            <button className="ticket-modal-close-btn" onClick={() => setShowTicketModal(false)} 
            //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound} onTouchStart={playHoverSound}
             >
              Back
            </button>
          </div>
        </div>
      )}

        {/* ✅ Ticket Modal Guard*/}
        {showGuardModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <div
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
                minWidth: "300px",
              }}
            >
              <h3></h3>
              <p>{guardMessage}</p>
              <button
                onClick={() => setShowGuardModal(false)}
                style={{
                  marginTop: "10px",
                  padding: "8px 14px",
                  backgroundColor: "#4caf50",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                OK
              </button>
            </div>
          </div>
        )}



      {/* ✅ HowToModal */}
      {showHowToModal && (
        <div className="howto-modal-overlay" onClick={() => setShowHowToModal(false)}>
          <div className="howto-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="howto-modal-title">How to Play TogetherWeMoon</h2>
            <p className="howto-modal-text">🎮 There are 20 mangoes in total. Select mangoes according to the number of tickets you purchased. You can change your selection until you press Confirm. </p>
            <p className="howto-modal-text">🎟️ Ticket prices:</p>
            <ul className="howto-modal-list">
              <li>2000 SHIDO — 1 pick</li>
              <li>3800 SHIDO — 2 picks</li>
              <li>5400 SHIDO — 3 picks</li>
              <li>6800 SHIDO — 4 picks</li>
              <li>8000 SHIDO — 5 picks</li>
            </ul>
            <p className="howto-modal-text">🎁 Containing different rewards, consisting of Prizes:</p>
            <ul className="howto-modal-list">
              <li>1 prize of 10000 SHIDO</li>
              <li>1 prize of 7000 SHIDO</li>
              <li>1 prize of 5000 SHIDO</li>
              <li>7 prizes of 400 SHIDO</li>
              <li>10 prizes of 200 SHIDO</li>
            </ul>
            <button className="howto-modal-close-btn" onClick={() => setShowHowToModal(false)} 
            //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound} onTouchStart={playHoverSound} 
            >Back</button>
          </div>
        </div>
      )}


      {/* ✅ ItemModal */}
      {showItemModal && (
        <div className="item-modal-overlay" onClick={() => setShowItemModal(false)}>
          <div className="item-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="item-modal-title">🍋 Item</h2>
            <p className="item-modal-message">Coming Soon</p>
            <button className="item-modal-close-btn" onClick={() => setShowItemModal(false)} 
            //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound} onTouchStart={playHoverSound}
             >
              Close
            </button>
          </div>
        </div>
      )}



      {/* ✅ WalletModal */}
      {showWalletModal && (
        <div className="wallet-modal-overlay" onClick={() => setShowWalletModal(false)}>
          <div className="wallet-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="wallet-modal-title">🔐 Connect Wallet</h2>

            {isConnected ? (
              <div className="wallet-status-box">
                <p>
                  Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
                <button className="wallet-btn disconnect" onClick={() => disconnect()}
                  //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound}
                  //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button className="wallet-btn connect" onClick={() => open()} // ✅ เปิด Web3Modal UI
                //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound}
                //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
              >
                Connect
              </button>
            )}
            {/* ✅ ปุ่มเชื่อมตรงกับ MetaMask 
            <button className="wallet-btn connect" onClick={connectWallet}>
              MetaMask
            </button> */}
            

            <button className="wallet-btn close" onClick={() => setShowWalletModal(false)}
              //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound}
              //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
            >
              Close
            </button>
          </div>
        </div>
      )}

          {/* ✅ Reward Modal */}
          {showRewardModal && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2 style={{ color: "white" }}>Reward transferred on-chain!</h2>
                <button
                  className="ok-btn"
                  onClick={() => {
                    setShowRewardModal(false);
                    setShowMascotModal(true); // เปิด Mascot Modal หลังจากกด OK
                    // ✅ เล่นเสียง Win/Lose ตอนกด OK
                    if (audioRef.current) {
                      audioRef.current.currentTime = 0;
                      audioRef.current.play().catch(err => console.error("Play failed:", err));
                    }
                  }}
                  //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound}
                  //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
                >
                  OK
                </button>
              </div>
            </div>
          )}

          {/* ✅ MascotModal */}
          {showMascotModal && (
            <div
              className="modal-overlay"
              onClick={() => {
                setShowMascotModal(false);
                setShowTryAgain(true); // ✅ แสดงปุ่ม Try Again หลังปิด modal
              }}
            >
              <div
                className="modal-content bounce"
                onClick={(e) => e.stopPropagation()}
              >

                {/* ✅ Audio element */}
                <audio
                  ref={audioRef}
                  src={`${import.meta.env.BASE_URL}${mascotStatus === "win" ? "Win.mp3" : "Lose.mp3"}`}
                  preload="auto"
                />

                <img
                  src={mascotStatus === "win" ? mascotWin : mascotLose}
                  alt={mascotStatus === "win" ? "Win Mascot" : "Lose Mascot"}
                  className="mascot-img"
                  loading="lazy"
                />
                <h2 style={{ color: "white" }}>
                  {mascotStatus === "win" ? "🎉 You Win!" : "😢 You Lose!"}
                </h2>
                <h3 className="reward-summary">Total Reward: {totalReward} SHIDO</h3>

                <div className="modal-buttons">
                  <button
                    className="close-btn"
                    onClick={() => {
                      setShowMascotModal(false);
                      setShowTryAgain(true); // ✅ เปิดปุ่ม Try Again
                    }}
                    //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound}
                    //ถ้าจะใช้ลบข้างวหน้าออก onTouchStart={playHoverSound}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}



          {showTryAgain && (
            <div className="try-again-container">
              <button
                className="try-again-btn"
                onClick={() => {
                  resetGame(); // ✅ reset ที่ปุ่ม Try Again เท่านั้น
                  setShowTryAgain(false); // ซ่อนปุ่มหลังรีเซ็ต
                }}
                //ถ้าจะใช้ลบข้างวหน้าออก onMouseEnter={playHoverSound} onTouchStart={playHoverSound}
              >
                Play Again
              </button>
            </div>
          )}


     




    </div>
  );
}

export default App;
