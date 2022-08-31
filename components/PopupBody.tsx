import React, { useContext } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import { hashToLink, trimHash } from "../utils/functions/utils";

function PopupBody() {
  const { contextState, setContextState } = useContext(AppContext);

  function togglePop() {
    setContextState({
      ...contextState,
      showPopup: false,
      txHash: "",
      errMsg: "",
    });
  }
  return (
    <div className="select-none flex rounded-2xl flex-col items-center justify-evenly text-xl py-12 px-4 space-y-4 w-full max-w-xl bg-gray-800 relative">
      <div className=" flex flex-col items-center justify-center">
        {contextState.isLoading && contextState.showPopup && (
          <div className="flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-red-500">Minting...</span>
          </div>
        )}
        {contextState.errMsg != "" && (
          <div className="flex items-center justify-center flex-col">
            <img src="/assets/images/error.png" alt="" />
            <span className="text-4xl text-red-900 mb-6">ERROR</span>
            <span className="text-lg font-bold text-beige text-center">
              {contextState.errMsg}
            </span>
          </div>
        )}
        {!contextState.isLoading && contextState.txHash != "" && (
          <div className="flex items-center justify-center flex-col">
            <img src="/assets/images/success.png" alt="" />
            <span className="text-3xl font-bold text-green-400 text-center">
              Mint Succesfull
            </span>
            <div className="flex text-beige mt-4 hover:text-gray-600">
              <a
                href={hashToLink(contextState.txHash)}
                target="_blank"
                rel="noreferrer"
              >
                {trimHash(contextState.txHash)}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className="flex">
        {
          <div
            className="rounded  bg-spooky text-white leading-3 text-center p-2 font-bold cursor-pointer absolute top-4 right-4 bg-gray-900 "
            onClick={() => togglePop()}
          >
            X
          </div>
        }
        {contextState.txHash != "" && (
          <div className="ml-4 rounded  bg-red-300 text-black text-sm leading-3 text-center px-6 py-4 font-bold cursor-pointer">
            <Link href="/form">Enter Details</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupBody;
