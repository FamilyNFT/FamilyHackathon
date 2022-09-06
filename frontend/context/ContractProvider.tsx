import { ethers } from "ethers";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import Web3 from "web3";
import abi from "../utils/abis/familynft.json";
import marketabi from "../utils/abis/marketplace.json";

let contractContext = createContext(null as any);
function ContractProvider({ children }: { children: ReactNode }) {
  const contract = useCallback(() => {
    const { ethereum } = window as any;
    ethereum.chainId = "0x0b0c";
    ethereum.networkVersion = "2828";
    const NFTabi = abi as any;
    const web3 = new Web3(ethereum);
    const contract = new web3.eth.Contract(
      NFTabi.abi,
      "0xA9a903a5C00B8898c3Da43B370B11F5bFA0D9A77"
    );

    return contract;
  }, []);
  const marketContract = useCallback(() => {
    const { ethereum } = window as any;
    ethereum.chainId = "0x0b0c";
    ethereum.networkVersion = "2828";
    const NFTabi = marketabi as any;
    const web3 = new Web3(ethereum);
    const contract = new web3.eth.Contract(
      NFTabi.abi,
      "0x9464Eda7beBFFA20a9BcEA2273C3D1A1E2C984EB"
    );

    return contract;
  }, []);
  const values = useMemo(() => ({ contract, marketContract }), []);
  return (
    <contractContext.Provider value={values}>
      {children}
    </contractContext.Provider>
  );
}

export default ContractProvider;
export const useContract = () => useContext(contractContext);
