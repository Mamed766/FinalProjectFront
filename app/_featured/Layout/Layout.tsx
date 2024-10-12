"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserSidebar from "../Sidebar/UserSidebar";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isUserSideBarOpen, setUserIsSideBarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const pathname = usePathname();
  const noLayoutPages = ["/dashboard", "/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  const handleUserSideBar = () => {
    setUserIsSideBarOpen((prev) => !prev);
  };

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="z-50">
        <Sidebar
          isOpen={isSideBarOpen}
          onClose={() => setIsSideBarOpen(false)}
        />
        <UserSidebar
          isOpen={isUserSideBarOpen}
          onClose={() => setUserIsSideBarOpen(false)}
        />
      </div>
      <div className="">
        <Header
          handleSidebar={handleSideBar}
          handleUserSideBar={handleUserSideBar}
        />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
