// src/hooks/useWallet.ts
import { useAccount, useWalletClient, useSwitchChain } from "wagmi";
import { ethers } from "ethers";

export function useWallet(adminAddress: string) {
  // ✅ address ของ wallet ที่เชื่อมต่อผ่าน Web3Modal
  const { address } = useAccount();

  // ✅ client จาก Web3Modal (ใช้สร้าง provider/signer)
  const { data: walletClient } = useWalletClient();

  // ✅ hook สำหรับสลับ chain ไปยัง Shido
  const { switchChain } = useSwitchChain();

  // ✅ ตรวจสอบว่าเป็น Admin หรือไม่
  const isAdmin =
    address?.toLowerCase() === adminAddress.toLowerCase();

  // ✅ เพิ่ม/สลับไปยัง Shido Network
  const connectShidoNetwork = async () => {
    try {
      await switchChain({ chainId: 9008 }); // chainId ของ Shido
    } catch (error) {
      console.error("Failed to switch to Shido network:", error);
    }
  };

  // ✅ คืนค่า provider และ signer สำหรับใช้งานกับ contract
  const getProviderAndSigner = async () => {
    if (!walletClient) return null;

    // สร้าง ethers provider จาก wagmi transport
    const provider = new ethers.BrowserProvider(walletClient.transport);
    const signer = await provider.getSigner();
    return { provider, signer };
  };

  return {
    walletAddress: address,
    connectShidoNetwork,
    isAdmin,
    getProviderAndSigner,
  };
}
