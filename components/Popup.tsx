import { AppContext } from "../context/AppContext";
import React, { useContext, useState } from "react";

export function Popup2({
  children,
  toggle,
  setToggle,
}: {
  children: any;
  toggle: boolean;
  setToggle: Function;
}) {
  return toggle ? (
    <div className=" flex items-center background-color[rgba(0, 0, 0, 0.3)] height[100%] inset-0 z-30 width[100%]  justify-center fixed overflow-hidden">
      <div className="relative ">
        <div
          className="absolute right-2 top-2 leading-3 text-center cursor-pointer"
          onClick={() => setToggle(false)}
        >
          X
        </div>
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
}

export function Popup({ children }: { children: any }) {
  const { contextState, setContextState } = useContext(AppContext);
  function togglePop() {
    setContextState({
      ...contextState,
      showPopup: false,
    });
  }
  return contextState.showPopup ? (
    <div className=" flex items-center bg-black/30 h-full inset-0 z-30 w-full  justify-center fixed overflow-hidden px-4">
      <div className="flex items-center justify-center relative w-full flex-col">
        {children}
      </div>
    </div>
  ) : (
    <></>
  );
}
