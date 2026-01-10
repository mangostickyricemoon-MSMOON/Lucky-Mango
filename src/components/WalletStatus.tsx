import { useAccount } from "wagmi";

type WalletStatusProps = {
  localAddress: string | null;
};

function WalletStatus({ localAddress }: WalletStatusProps) {
  // ✅ จาก wagmi
  const { address: wagmiAddress, isConnected } = useAccount();

  // ✅ เลือก address ที่มีค่าก่อน
  const displayAddress = localAddress || (isConnected ? wagmiAddress : null);

  return (
    <>
      {displayAddress && (
        <div className="wallet-status">
          <span className="wallet-address">
            {displayAddress.slice(0, 6)}...{displayAddress.slice(-4)}
          </span>
        </div>
      )}
    </>
  );
}

export default WalletStatus;
