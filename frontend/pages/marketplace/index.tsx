import React from "react";
import MarketPlaceNFTCard from "../../components/MarketPlaceNFTCard";

const Index = () => {
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
      <div className="grid py-10 md:grid-cols-4 gap-5">
        {colors.map((item, index) => {
          return <MarketPlaceNFTCard data={item} color={index} />;
        })}
      </div>
    </div>
  );
};

export default Index;
