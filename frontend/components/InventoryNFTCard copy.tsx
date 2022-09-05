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
  const { wallet }: any = useWalletContext();
  const [toggle, setToggle] = useState(false);
  const { storeJson } = useStorage();
  const handleListForSale = async () => {
    fetch("/items").then((res) => console.log(res.json()));
    alert("NFT listed for Sale Succesfully");
  };

  return (
    <div>
      <div className="flex items-center justify-center flex-col rounded-lg border-4 border-white p-4 w-full max-w-[300px]">
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
              {`Drop: ${data.drop}`}
            </div>
            <div className="flex items-center break-all text-white">
              {`Minter: ${data.minter.slice(0, 5)}`}
            </div>
            <div className="flex items-center break-all text-white">
              {`Color: ${data.color}`}
            </div>
            <div className="flex items-center break-all text-white">
              {`Size: ${data.size}`}
            </div>
            <div className="flex items-center break-all text-white">
              {`Type: ${data.type}`}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-4 w-full">
          <span className="text-xl tracking-tighter text-yellow-400 ">
            {contextState.stocks.length > 0 &&
              contextState.stocks[color][selectedSize]}
            <button
              onClick={() => handleListForSale()}
              className="text-base text-white ml-2 bg-blue-500 px-5 py-2 rounded"
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
