import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/contract"; // ✅ ต้องมี abi ด้วย
import { abi } from "../../Contract/ABI";

export default function PoolBalance() {
  const [balance, setBalance] = useState<string>("...");

  useEffect(() => {
    async function fetchBalance() {
      try {
        if (!window.ethereum) { setBalance("No wallet"); return;
        }
            
        const provider = new ethers.BrowserProvider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, provider);

        // ✅ เรียกฟังก์ชัน getPoolBalance จาก smart contract
        const b = await contract.getPoolBalance();
        setBalance(ethers.formatEther(b));
      } catch (err) {
        console.error("Failed to fetch pool balance:", err);
        setBalance("Error");
      }
    }
    fetchBalance();
  }, []);

  return <p className="pool-balance">💰 Pool Balance: {balance} SHIDO</p>;
}
