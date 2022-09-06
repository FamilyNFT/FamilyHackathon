import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { trimAddress } from "../utils/functions/utils";
import { ethers } from "ethers";
import Link from "next/link";
import { useWalletContext } from "../context/WalletContext";
export default function Nav() {
  const { contextState, setContextState } = useContext(AppContext);
  const { wallet, connectWallet }: any = useWalletContext();
  // async function connectWallet() {
  //   const { ethereum } = window as any;
  //   if (!ethereum) {
  //     window.alert("You must install MetaMask to use this website");
  //     return;
  //   }
  //   let provider = new ethers.providers.Web3Provider(ethereum, "any");
  //   let network = await provider.getNetwork();

  //   const addr = await provider.send("eth_requestAccounts", []);
  //   alert(addr[0]);
  // }

  return (
    <div className="flex items-center sticky-top bg-black justify-between w-full py-4 px-5 lg:px-16 top-0">
      <h1 className="text-xl lg:text-3xl text-white">FamilyNFT</h1>
      <div className="md:flex hidden gap-5 text-lg text-white">
        <Link href={"/store"}>Store</Link>
        <Link href={"/inventory"}>Inventory</Link>
        <Link href={"/marketplace"}>Marketplace</Link>
        <Link href={"/order"}>My Orders</Link>
      </div>
      {wallet ? (
        <div className="text-white">{trimAddress(wallet)}</div>
      ) : (
        <div
          className="px-8 py-2.5 uppercase bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600"
          onClick={() => connectWallet()}
        >
          <span className="text-white text-lg font-medium">{"Connect"}</span>
        </div>
      )}
    </div>
  );
}
