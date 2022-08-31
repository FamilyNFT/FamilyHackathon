import Link from "next/link";
import React from "react";
import intro from "../../../assets/bannerImg.mp4";
function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center  min-h-screen text-white">
      <div className="flex flex-1 flex-col mt-16 lg:mb-8">
        <h1 className="text-5xl font-bold mb-8 text-red-400">
          The Home of Phygitals
        </h1>
        <div className="flex flex-col space-y-2 text-gray-200">
          <span>
            Made with only the best quality French Terry Cotton Fabric,
            specifically engineered to balance softness and thickness to
            maximize comfort
          </span>
          <span>
            With our Classic Script logo embroidered for that luxurious
            minimalistic look
          </span>
          <span>
            Luxuriously soft and ridiculously cozy, our relaxed unisex fit will
            keep you looking fresh whilst keeping you warm during the harsh
            winters. The perfect everyday outfit that gives off a cool luxurious
            vibe.
          </span>
        </div>
        <div>
          <div className="hover:bg-blue-600 inline-block bg-blue-500 px-8 py-2.5 rounded mt-5">
            <Link href={"/order"}>Order Now</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end flex-col">
        <video
          className="max-h-[500px] w-[90%] border-2 border-white rounded-md"
          src="/assets/bannerImg.mp4"
          controls
          autoPlay
          loop
        ></video>
      </div>
    </div>
  );
}

export default Hero;
