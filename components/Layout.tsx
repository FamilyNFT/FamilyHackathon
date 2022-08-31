import React, { ReactChild, ReactChildren } from "react";
import Nav from "./Nav";
import Footer from "./pages/home/Footer";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="">
      <Nav />
      <div className="bg-gray-900">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
