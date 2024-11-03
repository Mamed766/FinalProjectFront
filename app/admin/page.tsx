"use client";
import React, { useState } from "react";
import AdminLayout from "./adminLayout/AdminLayout";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

const page = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleSideBar = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  return (
    <div>
      <AdminLayout>
        <AdminSidebar isOpen={isSideBarOpen} onClose={handleSideBar} />
        <AdminHeader
          isSideBarOpen={isSideBarOpen}
          handleSideBar={handleSideBar}
        />
      </AdminLayout>
    </div>
  );
};

export default page;
