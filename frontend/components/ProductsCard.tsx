import Link from "next/link";
import React, { ReactNode, ReactChildren, useState } from "react";
import ReactCardFlip from "react-card-flip";

interface props {
  children?: ReactChildren;
  product: string;
  image: string;
  properties?: string[];
}

function ProductsCard({ product, image, properties }: props) {
  const [isflip, setFlip] = useState(false);
  const flip = () => {
    setFlip((value) => !value);
  };
  return (
    <div
      className="min-h-[300px] w-[100%] rounded"
      onMouseEnter={() => setFlip(true)}
      onMouseLeave={() => setFlip(false)}
    >
      <ReactCardFlip isFlipped={isflip} flipDirection="horizontal">
        <div className="bg-blue-800 min-h-[400px] w-full rounded flex flex-col justify-center items-center">
          {product}
        </div>
        <div className="bg-black min-h-[400px] w-full rounded flex flex-col justify-between py-10 items-center">
          <video src={image} autoPlay loop muted className="w-48 block"></video>
          <div>
            {properties?.map((item, index) => {
              return (
                <div className="flex items-center" key={index}>
                  <div className="w-2 h-2 rounded-full bg-red-600 mr-2"></div>
                  <span className="text-white font-lato text-sm">{item}</span>
                </div>
              );
            })}
          </div>
          <div className="px-5 border-2 rounded mt-2 border-blue-500">
            <Link href={"/"}>Order</Link>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default ProductsCard;
