"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserSidebar from "../Sidebar/UserSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isUserSideBarOpen, setUserIsSideBarOpen] = useState(false);
  const pathname = usePathname();
  const noLayoutPages = ["/dashboard", "/", "/register"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  const handleUserSideBar = () => {
    setUserIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <div className="z-50">
        <UserSidebar
          isOpen={isUserSideBarOpen}
          onClose={() => setUserIsSideBarOpen(false)}
        />
      </div>
      <div className="">
        <Header handleUserSideBar={handleUserSideBar} />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
