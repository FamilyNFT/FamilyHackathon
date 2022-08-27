import { ethers } from "ethers";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import abi from "../utils/abis/familynft.json";

let contractContext = createContext(null as any);
function ContractProvider({ children }: { children: ReactNode }) {
  const contract = useCallback(() => {
    console.log("hello");
    const { ethereum } = window as any;
    ethereum.chainId = "0x0b0c";
    ethereum.networkVersion = "2828";
    const NFTabi = abi as any;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      "0x6a6075f009F9CDF3558C7907B9163756161Ae91f",
      NFTabi.abi,
      signer
    );
    return contract;
  }, []);
  const values = useMemo(() => ({ contract }), []);
  return (
    <contractContext.Provider value={values}>
      {children}
    </contractContext.Provider>
  );
}

export default ContractProvider;
export const useContract = () => useContext(contractContext);
