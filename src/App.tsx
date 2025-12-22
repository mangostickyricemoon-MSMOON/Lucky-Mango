import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import bgImage from './assets/background.png';
import mangoIcon from './assets/mango-icon.png';
import mascotWin from './assets/mascot-win.png';
import mascotLose from './assets/mascot-lose.png';
import logo from './assets/lucky-mango-logo.png';
import ticketIcon from './assets/ticket-icon.png';

import homeIcon from './assets/homeIcon.png';
import howtoIcon from './assets/howtoIcon.png';
import itemIcon from './assets/ItemIcon.png';
import walletIcon from './assets/WalletIcon.png';
import woodTexture from './assets/woodTexture.png';
import bgMusic from './assets/enchanted-fantasy-long-stinger.mp3';



// ✅ เพิ่ม type สำหรับ window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [showHowToModal, setShowHowToModal] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [showSummaryModal, setShowSummaryModal] = useState(false);

  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showItemModal, setShowItemModal] = useState(false);
  const [mascotStatus, setMascotStatus] = useState<'win' | 'lose' | null>(null);
  const [showMascotModal, setShowMascotModal] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);

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

  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);


  // ✅ เปิด modal เมื่อ component ถูก mount
  useEffect(() => {
    setShowAnnouncement(true);
  }, []);

  // ✅ เล่นเพลงพื้นหลัง
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log("Autoplay blocked:", err);
      });
    }
  }, []);

  // ✅ toggle mute/unmute 
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(audioRef.current.muted);

      // ✅ ถ้าเปิดเสียง ต้องสั่ง play() อีกครั้ง
      if (!audioRef.current.muted) {
        audioRef.current.play().catch(err => {
          console.log("Play failed:", err);
        });
      }
    }
  };


  {/* ✅ connectWallet */ }
  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } else {
        alert('Please install MetaMask to connect your wallet.');
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const ADMIN_ADDRESS = '0x493ae9f967fc9af80fb7ba7b30ed32a9e3c80b85'; // ✅ เปลี่ยนเป็น address ของคุณ
  const isAdmin = walletAddress?.toLowerCase() === ADMIN_ADDRESS.toLowerCase();


  {/* ✅ เลือกรางวัล */ }
  const handlePick = (index: number): void => {
    if (!gameStarted || gameLocked) return;

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


  {/* ✅ เริ่มเล่น */ }
  const handleStart = (): void => {
    if (pickedIndexes.length === 0 || gameLocked) return;

    const totalBoxes = 20;
    const newPrizes: string[] = [];
    let pool = [...prizePool];

    for (let i = 0; i < totalBoxes; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      newPrizes.push(pool[randomIndex]);
      pool.splice(randomIndex, 1);
    }

    setRewardsWon(newPrizes);
    setPrizePool(pool);
    setRevealedIndexes(pickedIndexes);
    setShowSummaryModal(true);
    setGameLocked(true);

    // ✅ คำนวณรางวัลรวมจากกล่องที่เลือก
    const totalRewardCalc = pickedIndexes.reduce((sum, i) => {
      const match = newPrizes[i]?.toString().match(/(\d+)/);
      const value = match ? parseInt(match[1]) : 0;
      return sum + value;
    }, 0);

    setTotalReward(totalRewardCalc); // ✅ เก็บใน state

    const isWinning = totalRewardCalc > ticketPrice;
    setMascotStatus(isWinning ? 'win' : 'lose');
    setShowMascotModal(true);
  };




  const getTotalShido = (): number => {
    return rewardsWon.reduce((total, prize) => {
      const match = prize.match(/(\d+)/);
      return match ? total + parseInt(match[1]) : total;
    }, 0);
  };

  const resetGame = (): void => {
    setPicksTotal(0);
    setPicksAvailable(0);
    setPickedIndexes([]);
    setRewardsWon([]);
    setPrizePool([]);
    setGameStarted(false);
    setGameLocked(false);
    setShowSummaryModal(false);
    setShowMascotModal(false); // ✅ ปิด modal
  };

  return (
    <div className="container">

      <div className="logo-header">
        <img src={logo} alt="Lucky Mango Logo" className="logo" loading="lazy" />

        {/* ✅ Wallet Status */}
        {walletAddress && (
          <div className="wallet-status">
            <span className="wallet-address">{walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</span>
          </div>
        )}

        {/* ✅ Announcement Button */}
        <button className="announcement-btn" onClick={() => setShowAnnouncement(true)}>
          🪧
        </button>

        {/* ✅ เพลงพื้นหลัง (ไฟล์อยู่ใน public/music.mp3) */}
      <audio ref={audioRef} src={bgMusic} autoPlay loop muted />
        {/* ✅ ไอคอนลำโพงที่มุมจอ */}
      <button
        onClick={toggleMute}
        className="sound-toggle-btn" 
        style={{ 
          border: 'none', fontSize: '28px', cursor: 'pointer' }} >
        {isMuted ? "🔇" : "🔊"}
      </button>

      </div>


      <div className="status-bar">
        <div className="status-left">🎟️ Picks: ({picksAvailable} / {picksTotal})</div>
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
                    border: `6px solid ${isPicked ? '#4caf50' : '#ffb300'}`,
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


        <div className="button-group">
          {/* ✅ Buy Ticket Button */}
          <button
            className={`buy-ticket-btn ${gameStarted ? 'disabled' : 'active'}`}
            onClick={() => setShowTicketModal(true)}
            disabled={gameStarted}
          >
            Buy Ticket
          </button>

          {/* ✅ Confirm Button */}
          <button
            className={`confirm-btn ${gameStarted && !gameLocked ? 'active' : 'disabled'
              }`}
            onClick={handleStart}
            disabled={
              !gameStarted || gameLocked || picksAvailable !== 0 || pickedIndexes.length !== picksTotal
            }
          >
            Confirm
          </button>
        </div>



        {/* ✅ Bottom Navigation with icons */}
        <div
          className="bottom-nav"
          style={{
            backgroundImage: `url(${woodTexture})`,
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
          <button className="nav-btn" onClick={() => setShowHowToModal(true)}>
            <img src={howtoIcon} alt="How To" className="nav-icon" />
          </button>
          <button className="nav-btn" onClick={() => setShowItemModal(true)}>
            <img src={itemIcon} alt="Item" className="nav-icon" />
          </button>
          <button className="nav-btn" onClick={() => setShowWalletModal(true)}>
            <img src={walletIcon} alt="Wallet" className="nav-icon" />
          </button>
        </div>

      



      </div>

      {/* ✅ Modal Part____________________________________________________________________________________ */}

      {/* ✅ Announcement Modal */}
      {showAnnouncement && (
        <div className="announcement-modal-overlay" onClick={() => setShowAnnouncement(false)}>
          <div className="announcement-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="announcement-title">🎉 Welcome to Lucky Mango!</h2>
            <p className="announcement-message">
              Stay tuned for upcoming events and prize updates
            </p>
            <button className="announcement-close-btn" onClick={() => setShowAnnouncement(false)}>
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
                    onClick={() => {
                      setPicksTotal(ticket.picks);
                      setPicksAvailable(ticket.picks);
                      setTicketPrice(ticket.price); // ✅ เก็บราคาตั๋ว
                      setShowTicketModal(false);
                      setGameStarted(true);
                      setGameLocked(false);
                      setPrizePool([
                        '🎉 10000 SHIDO',
                        '🎉 7000 SHIDO',
                        '🎉 5000 SHIDO',
                        ...Array(7).fill('🎉 400 SHIDO'),
                        ...Array(10).fill('🎉 200 SHIDO')
                      ]);
                    }}
                  >
                    Buy
                  </button>
                </li>
              ))}
            </ul>
            <button className="ticket-modal-close-btn" onClick={() => setShowTicketModal(false)}>Back</button>
          </div>
        </div>
      )}

      {/* ✅ HowToModal */}
      {showHowToModal && (
        <div className="howto-modal-overlay" onClick={() => setShowHowToModal(false)}>
          <div className="howto-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="howto-modal-title">How to Play Lucky Mango</h2>
            <p className="howto-modal-text">🎮 Select mangoes based on your ticket picks. You can change your selection until you press Start.</p>
            <p className="howto-modal-text">🎟️ Ticket prices:</p>
            <ul className="howto-modal-list">
              <li>2000 SHIDO — 1 pick</li>
              <li>3800 SHIDO — 2 picks</li>
              <li>5400 SHIDO — 3 picks</li>
              <li>6800 SHIDO — 4 picks</li>
              <li>8000 SHIDO — 5 picks</li>
            </ul>
            <p className="howto-modal-text">🎁 Prizes:</p>
            <ul className="howto-modal-list">
              <li>1 prize of 10000 SHIDO</li>
              <li>1 prize of 7000 SHIDO</li>
              <li>1 prize of 5000 SHIDO</li>
              <li>7 prizes of 400 SHIDO</li>
              <li>10 prizes of 200 SHIDO</li>
            </ul>
            <button className="howto-modal-close-btn" onClick={() => setShowHowToModal(false)}>Back</button>
          </div>
        </div>
      )}

      {/* ✅ ItemModal */}
      {showItemModal && (
        <div className="item-modal-overlay" onClick={() => setShowItemModal(false)}>
          <div className="item-modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="item-modal-title">🍋 Item</h2>
            <p className="item-modal-message">Coming Soon</p>
            <button className="item-modal-close-btn" onClick={() => setShowItemModal(false)}>
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

            {walletAddress ? (
              <div className="wallet-status-box">
                <p>Connected: {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}</p>
                <button className="wallet-btn disconnect" onClick={() => setWalletAddress(null)}>
                  Disconnect
                </button>
              </div>
            ) : (
              <button className="wallet-btn connect" onClick={async () => {
                try {
                  if (window.ethereum) {
                    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    setWalletAddress(accounts[0]);
                  } else {
                    alert('Please install MetaMask.');
                  }
                } catch (err) {
                  console.error('Connection failed:', err);
                }
              }}>
                Connect
              </button>
            )}

            <button className="wallet-btn close" onClick={() => setShowWalletModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* ✅ MascotModal */}
      {showMascotModal && (
        <div className="modal-overlay" onClick={() => {
          setShowMascotModal(false);
          setShowTryAgain(true); // ✅ แสดงปุ่ม Try Again หลังปิด modal
        }}>
          <div className="modal-content bounce" onClick={(e) => e.stopPropagation()}>
            <img
              src={mascotStatus === 'win' ? mascotWin : mascotLose}
              alt={mascotStatus === 'win' ? 'Win Mascot' : 'Lose Mascot'}
              className="mascot-img"
              loading="lazy"
            />
            <h2>{mascotStatus === 'win' ? '🎉 You Win!' : '😢 You Lose!'}</h2>
            <h3 className="reward-summary">Total Reward: {totalReward} SHIDO</h3>


            <div className="modal-buttons">
              <button className="close-btn" onClick={() => {
                setShowMascotModal(false);
                setShowTryAgain(true);
              }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showTryAgain && (
        <div className="try-again-container">
          <button className="try-again-btn" onClick={() => {
            resetGame();
            setShowTryAgain(false); // ✅ ซ่อนปุ่มหลังรีเซ็ต
          }}>
            Try Again
          </button>
        </div>
      )}





    </div>
  );
}

export default App;
