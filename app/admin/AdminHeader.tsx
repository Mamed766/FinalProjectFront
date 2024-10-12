import Link from "next/link";
import React from "react";

const AdminHeader = () => {
  return (
    <div className="bg-black w-full p-5">
      <div className="flex justify-center items-center">
        <ul>
          <Link href={"/admin/fashions"} className="text-white">
            Fashions
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default AdminHeader;
