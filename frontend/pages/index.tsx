import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { AppContext } from "../context/AppContext";
import Nav from "../components/Nav";
import Hero from "../components/pages/home/Hero";
import Footer from "../components/pages/home/Footer";
import { FAMILY_ABI, FAMILY_ADDRESS } from "../utils/contracts/FamilyContract";
import {
  getPrice,
  getStocks,
  getSupply,
  getTeesDetails,
} from "../utils/functions/FamilyFunctions";
import { Popup } from "../components/Popup";
import PopupBody from "../components/PopupBody";
import ReactCardFlip from "react-card-flip";
import ProductsCard from "../components/ProductsCard";

declare let window: any;
interface product {
  name: string;
  image: string;
  properties: string[];
}

const Home: NextPage = () => {
  const { contextState, setContextState } = useContext(AppContext);
  const products: product[] = [
    {
      name: "T-shirts",
      image: "Blue",
      properties: [
        "Brushed French Terry Fabric",
        "Peached Finishing For Extra Softness",
        "Made with 460GSM 100% Cotton",
        "Made in Australia",
      ],
    },
    {
      name: "Joggers",
      image: "Green",
      properties: [
        "Brushed French Terry Fabric",
        "Peached Finishing For Extra Softness",
        "Made with 460GSM 100% Cotton",
        "Made in Australia",
      ],
    },
    {
      name: "Hoodies",
      image: "Natural",
      properties: [
        "Brushed French Terry Fabric",
        "Peached Finishing For Extra Softness",
        "Made with 460GSM 100% Cotton",
        "Made in Australia",
      ],
    },
    {
      name: "Shorts",
      image: "Olive",
      properties: [
        "Brushed French Terry Fabric",
        "Peached Finishing For Extra Softness",
        "Made with 460GSM 100% Cotton",
        "Made in Australia",
      ],
    },
  ];

  useEffect(() => {
    if (!window.ethereum) {
      window.alert("You must install MetaMask to use this website");
      return;
    }
    // connectWallet();
    // window.ethereum.on("accountsChanged", () => {
    //   connectWallet();
    // });

    window.ethereum.on("chainChanged", () => {
      document.location.reload();
    });
  }, []);
  return (
    <div className="items-center justify-center flex ">
      <Head>
        <title>FamilyNFT </title>
        <meta
          name="description"
          content="NFT based clothing Company on LUKSO"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col items-center w-screen justify-center px-5 lg:px-16 ">
        {/* <Nav /> */}
        <Hero />
        {/* <div className="flex flex-col items-center justify-center text-white py-12 text-3xl space-y-8">
          <span>Price: {contextState.price} LYXt</span>
          <span>{100 - contextState.currentSupply} Left</span>
        </div> */}
        {/* <Mint /> */}
        {/* <Footer /> */}
        <div className="w-full text-white py-10">
          <h1 className="text-4xl mb-10 font-bold">Products</h1>
          <div className="grid mx-auto w-[80%] md:w-full md:grid-cols-2 lg:grid-cols-4 w-full gap-10">
            {products.map(({ name, image, properties }) => {
              return (
                <ProductsCard
                  product={name}
                  image={"/assets/tees/" + image + ".mp4"}
                  properties={properties}
                />
              );
            })}
          </div>
        </div>
      </main>
      <Popup>
        <PopupBody />
      </Popup>
    </div>
  );
};

export default Home;
