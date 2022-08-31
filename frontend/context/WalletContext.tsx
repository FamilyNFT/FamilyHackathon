import ERC725 from "@erc725/erc725.js";
import React, { createContext, ReactNode, useContext, useState } from "react";
import erc725schema from "@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json";
import Web3 from "web3";
import { ethers } from "ethers";

interface walletProviderProps {
  children: ReactNode;
}

const SAMPLE_PROFILE_ADDRESS = "0xa907c1904c22DFd37FF56c1f3c3d795682539196";
const RPC_ENDPOINT = "https://rpc.l16.lukso.network";
const IPFS_GATEWAY = "https://2eff.lukso.dev/ipfs/";
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };
const walletContext = createContext({});

function WalletProvider({ children }: walletProviderProps) {
  const [wallet, setWallet] = useState<string>();
  async function getProfile(address: string) {
    try {
      const profile = new ERC725(
        erc725schema as any,
        address,
        provider,
        config
      );
      return await profile.fetchData("LSP3Profile");
    } catch (error) {
      return alert(
        "Install UP browser and setUp universal profile to use the web app"
      );
    }
  }
  async function connectWallet() {
    const { ethereum } = window as any;
    if (!ethereum) {
      window.alert("You must install UP browser to use this website");
      return;
    }
    let web3 = new Web3(ethereum);

    const addr = await web3.eth.requestAccounts();
    let universalProfile = await getProfile(addr[0]);
    if (universalProfile) {
      setWallet(addr[0]);
    }
  }

  return (
    <walletContext.Provider value={{ wallet, connectWallet }}>
      {children}
    </walletContext.Provider>
  );
}

export default WalletProvider;
export const useWalletContext = () => useContext(walletContext);
