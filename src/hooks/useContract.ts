import { useState, useEffect } from "react";
import { getContract } from "../utils/contract";

export function useContract() {
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    async function loadContract() {
      try {
        const c = await getContract();
        setContract(c);
      } catch (err) {
        console.error("Failed to load contract:", err);
      }
    }
    loadContract();
  }, []);

  return contract;
}
