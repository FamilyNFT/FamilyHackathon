import NFTCard from "../../NFTCard";

function Mint() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center py-16 w-full">
        <h2 className="text-white text-4xl mb-12">Mint NFT</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0  lg:space-x-24">
          <NFTCard color={0} />
          <NFTCard color={1} />
          <NFTCard color={2} />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0  lg:space-x-24 mt-16 lg:mt-24">
          <NFTCard color={3} />
          <NFTCard color={4} />
        </div>
      </section>
    </div>
  );
}

export default Mint;
