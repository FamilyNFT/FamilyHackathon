import { ethers, BigNumber, Contract } from "ethers";
import { formatUnits } from "ethers/lib/utils";
import { metadataFromId, metadataFromUri } from "./utils";

export const getSupply = async function (contract: any) {
  const totalSupply = await contract.totalSupply();
  return BigNumber.from(totalSupply).toNumber();
};
export const getPrice = async function (contract: any) {
  const price = await contract.price();
  return formatUnits(BigNumber.from(price), 18);
};
export const saleStatus = async function (contract: any) {
  const isPaused = await contract.paused();
  return isPaused;
};

export const getStocks = async function (contract: any) {
  let stocks = [];
  for (let i = 0; i < 5; i++) {
    const stock = await contract.getStock(i);
    let st = [];
    for (let j = 0; j < 5; j++) {
      st[j] = BigNumber.from(stock[j]).toNumber();
    }
    stocks[i] = st;
  }
  return stocks;
};

export const getOwnedIDs = async function (contract: any, addr: string) {
  let ids = await contract.lanternsOwned(addr);
  const ownedIds = ids.map((id: any) => BigNumber.from(id).toNumber());
  return ownedIds;
};

export const getTeesDetails = async function (contract: any, addr: string) {
  let ids = await contract.tokensOwned(addr);
  if (ids.length != 0) {
    const ownedIds = ids.map((id: any) => BigNumber.from(id).toNumber());
    const tee = await contract.tees(ownedIds[0]);
    return { owns: true, color: tee[0], size: tee[2] };
  } else {
    return { owns: false, color: "", size: "" };
  }
  // return ownedIds;
};

export const buyFamily = async function (
  contract: any,
  price: any,
  color: number,
  size: number
) {
  const totalPrice = price.toString();
  let overrides = {
    value: ethers.utils.parseEther(totalPrice),
  };
  let transaction = await contract.buyTees(color, size, overrides);
  let tx = await transaction.wait();

  return tx.transactionHash;
};
