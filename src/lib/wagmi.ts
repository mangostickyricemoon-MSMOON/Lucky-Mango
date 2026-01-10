import { http } from "wagmi";
import { defaultWagmiConfig, createWeb3Modal } from "@web3modal/wagmi/react";
import type { Chain } from "viem";

const shidoChain: Chain = {
  id: 9008,
  name: "Shido Network",
  nativeCurrency: { name: "Shido", symbol: "SHIDO", decimals: 18 },
  rpcUrls: { default: { http: ["https://evm.shidoscan.net"] } },
  blockExplorers: { default: { name: "ShidoScan", url: "https://shidoscan.com" } },
};

export const chains: [Chain, ...Chain[]] = [shidoChain];
export const projectId = "dea0730f347b9955e54382f99a806df9"; // ✅ ID WalletConnect

// ✅ กำหนด chains ใน defaultWagmiConfig
export const config = defaultWagmiConfig({
  chains,
  projectId,
  transports: {
    [shidoChain.id]: http(shidoChain.rpcUrls.default.http[0]),
  },
  metadata: {
    name: "Lucky Mango",
    description: "Lucky Mango DApp",
    url: "https://lucky-mango.netlify.app", //http://localhost:5173 อันนี้ไม่ใช้
    icons: ["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"],
  },
});

// ✅ createWeb3Modal ไม่ต้องใส่ chains อีก
createWeb3Modal({
  wagmiConfig: config,
  projectId,
});
