import { ethers } from "ethers";
import { abi } from "../../Contract/ABI"; // แปลง ABI.txt เป็น JSON ก่อน

// ✅ ใช้ address ที่คุณ deploy จริง
export const CONTRACT_ADDRESS = "0x2572f1fF123C79047D3eaC23bc6CC2b55b831Ef6";

export function getProvider() {
  if (!window.ethereum) {
    throw new Error("MetaMask not installed");
  }
  return new ethers.BrowserProvider(window.ethereum);
}

export async function getContract() {
  const provider = getProvider();
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
}
