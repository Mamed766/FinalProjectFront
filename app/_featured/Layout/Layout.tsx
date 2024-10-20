"use client";
import React, { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import UserSidebar from "../Sidebar/UserSidebar";
import Sidebar from "../Sidebar/Sidebar";
import { ChakraProvider } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isUserSideBarOpen, setUserIsSideBarOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const pathname = usePathname();
  const noLayoutPages = ["/admin", "/admin/fashions", "/admin/suits"];
  const shouldShowLayout = !noLayoutPages.includes(pathname);

  const handleUserSideBar = () => {
    setUserIsSideBarOpen((prev) => !prev);
  };

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <>
      <ChakraProvider>
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
          {shouldShowLayout && (
            <Header
              handleSidebar={handleSideBar}
              handleUserSideBar={handleUserSideBar}
            />
          )}

          {children}

          {shouldShowLayout && <Footer />}
        </div>
      </ChakraProvider>
    </>
  );
};

export default Layout;
