import React from "react";
import AdminLayout from "./adminLayout/AdminLayout";
import AdminHeader from "./AdminHeader";

const page = () => {
  return (
    <div>
      <AdminLayout>
        <AdminHeader />
      </AdminLayout>
    </div>
  );
};

export default page;
