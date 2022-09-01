import Link from "next/link";
import React from "react";
function Hero() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center  min-h-screen text-white">
      <div className="flex flex-1 flex-col mt-16 lg:mb-8">
        <h1 className="text-5xl font-bold mb-8 text-red-400">
          The Home of Phygitals
        </h1>
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
