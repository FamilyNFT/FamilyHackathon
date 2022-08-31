import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import InventoryNFTCard from "../../components/InventoryNFTCard copy";
import { useContract } from "../../context/ContractProvider";
import { useWalletContext } from "../../context/WalletContext";

const Index = () => {
  const [tokenIds, setTokenIds] = useState<string[]>([]);
  const [tokenMetadata, setTokenMeta] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { contract } = useContract();
  const { wallet }: any = useWalletContext();
  const getData = useCallback(async (id) => {
    let metadata = contract()
      .methods.getMetadata(id)
      .call()
      .then((metadataUri: string) => {
        console.log(metadataUri);
        const data = axios
          .get(metadataUri)
          .then((response: any) => response.data);
        return data;
      });
    return metadata;
  }, []);
  const getMetadata = useCallback(async () => {
    let arr: any[] = [];
    let metadata = await contract().methods.tokenIdsOf(wallet).call();
    setTokenIds(metadata);
    for (let i in metadata) {
      let data = await getData(metadata[i]);
      arr.push(data);
    }
    setTokenMeta(arr);
  }, [wallet, setTokenIds]);
  useEffect(() => {
    if (wallet) {
      getMetadata();
      setLoading(false);
    } else {
      setTokenIds([]);
      setLoading(false);
    }
  }, [wallet]);

  const colors = [
    {
      color: "Blue",
      image:
        "https://bafybeihicoc3yr2n53xrmrebdcn7w6qbnw7ostra5cejf3k5s6e2t44nm4.ipfs.w3s.link/ipfs/bafybeihicoc3yr2n53xrmrebdcn7w6qbnw7ostra5cejf3k5s6e2t44nm4/Blue.mp4",
    },
    {
      color: "Brown Choco",
      image:
        "https://bafybeigwkfxym4kxji3dpuvn3ibuh7af4byeczsu25stsoniglqafuhi4e.ipfs.w3s.link/Brown%20Choco.mp4",
    },
    {
      color: "Green",
      image:
        "https://bafybeifd7bborvabtd7qw54pbzwoscyjhvgmhzykb6jlleew436gylrihu.ipfs.w3s.link/ipfs/bafybeifd7bborvabtd7qw54pbzwoscyjhvgmhzykb6jlleew436gylrihu/Green.mp4",
    },
    {
      color: "Natural",
      image:
        "https://bafybeifuz6awfrygc3tswnsd32lrqf4mhznxdq5eroureugcavmscbcwha.ipfs.w3s.link/Natural.mp4",
    },
    {
      color: "Olive",
      image:
        "https://bafybeigmnfclgowmdwgdmfmy7vt5noh5dm43lsioxgt6q5mjrmwynn3as4.ipfs.w3s.link/Olive.mp4",
    },
  ];
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="grid py-10 md:grid-cols-4 gap-5">
          {tokenMetadata.map((item, index) => {
            console.log(item);
            return <InventoryNFTCard data={item} color={item.color} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Index;
