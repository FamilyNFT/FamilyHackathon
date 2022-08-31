import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useContract } from "../context/ContractProvider";
import { useWalletContext } from "../context/WalletContext";
import { useStorage } from "../context/Web3StorageProvider";
import { buyFamily } from "../utils/functions/FamilyFunctions";
import { Popup, Popup2 } from "./Popup";
import Router from "next/router";

type Meta = {
  name: string;
  description: string;
  image: string;
  id: string | number;
};
const colors = ["Natural", "Blue", "Olive", "Brown Choco", "Green"];
const sizes = ["XS", "S", "M", "L", "XL"];
const sizeOptions = [
  { value: "0", label: "XS" },
  { value: "1", label: "S" },
  { value: "2", label: "M" },
  { value: "3", label: "L" },
  { value: "4", label: "XL" },
];

const descriptions = [
  "Brushed French Terry Fabric",
  "Peached Finishing For Extra Softness",
  "Made with 460GSM 100% Cotton",
  "Made in Australia",
];

function InventoryNFTCard({ color, data }: { color: number; data: any }) {
  const { contextState, setContextState } = useContext(AppContext);
  const [selectedSize, setSelectedSize] = useState(0);
  const { wallet } = useWalletContext();
  const [toggle, setToggle] = useState(false);
  const { storeJson } = useStorage();
  const handleListForSale = async () => {
    alert("NFT listed for Sale Succesfully");
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col rounded-lg border-4 border-white p-4 w-full max-w-[380px]">
        {/* {console.log(color)} */}
        <video
          src={"/assets/tees/" + color + ".mp4"}
          autoPlay
          loop
          muted
          className="w-48"
        ></video>
        <div>
          {/* <span className="text-xl mt-4 text-red-500">{data.color}</span> */}

          <div className="flex flex-col  mt-3">
            <div className="flex items-center text-white">
              Drop:
              <span className="text-white font-lato text-sm">{data?.drop}</span>
            </div>
          </div>
        </div>
        {/* <div className="flex items-center justify-between space-x-2 w-full pt-4">
          {sizes.map((size, index) => (
            <div
              key={index}
              onClick={() => setSelectedSize(index)}
              className={`text-white py-1 px-2 cursor-pointer ${
                selectedSize == index
                  ? "bg-blue-500"
                  : "bg-gray-800 hover:bg-gray-900"
              } flex-1 text-center`}
            >
              {size}
            </div>
          ))}
        </div> */}
        <div className="flex items-center justify-center py-4 w-full">
          {/* <span
            className="text-blue-600 text-sm tracking-[-0.1em] cursor-pointer hover:text-blue-400"
            onClick={() => setToggle(true)}
          >
            Size Chart
          </span> */}
          <span className="text-xl tracking-tighter text-yellow-400 ">
            {contextState.stocks.length > 0 &&
              contextState.stocks[color][selectedSize]}
            <button
              onClick={() => handleListForSale()}
              className="text-base text-white ml-2 bg-blue-400 px-5 py-2.4 rounded"
            >
              List For sale
            </button>
          </span>
        </div>
        {contextState.stocks.length > 0 &&
          contextState.stocks[color][selectedSize] > 0 && (
            <div
              className="text-lg bg-red-300 px-6 py-1 rounded-lg cursor-pointer hover:bg-red-400 select-none"
              onClick={() => console.log("Minting")}
            >
              {contextState.isLoading ? "Minting.." : "Mint"}
            </div>
          )}
        {contextState.stocks.length > 0 &&
          contextState.stocks[color][selectedSize] == 0 && (
            <div className="text-lg bg-red-300 px-6 py-1 rounded-lg cursor-pointer hover:bg-red-400 select-none">
              Out Of Stock
            </div>
          )}
        <Popup2 toggle={toggle} setToggle={setToggle}>
          <div className="flex items-center justify-center p-8 text-white bg-red-300 w-[95vw] max-w-2xl">
            <img src="/assets/images/sizechart.png" alt="" />
          </div>
        </Popup2>
      </div>
    </div>
  );
}

export default InventoryNFTCard;