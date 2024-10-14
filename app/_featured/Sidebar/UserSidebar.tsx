"use client";
import { getCookie } from "cookies-next";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("Guest");
  const [userFirstname, setUserFirstname] = useState("Guest");
  const [userLastname, setUserLastname] = useState("Guest");
  const [userEmail, setUserEmail] = useState("Guest");

  const token = getCookie("token");

  useEffect(() => {
    if (token) {
      const decoded: any = jwtDecode(token);
      console.log(decoded, "DECODDDDDDDD");
      setUsername(decoded.username);
      setUserFirstname(decoded.firstName);
      setUserLastname(decoded.lastName);
      setUserEmail(decoded.email);
    }
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 right-0  z-40 flex flex-col bg-clip-border  bg-[#201D1B] text-gray-700 h-screen w-full max-w-[20rem]  shadow-xl shadow-blue-gray-900/5 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full justify-end pt-2 pr-2 text-[50px] text-white items-end cursor-pointer hover:text-red-600 duration-300 ">
          <IoMdCloseCircleOutline onClick={onClose} />
        </div>
        <div className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-white">
          <div className="flex gap-1">
            User firstName:{" "}
            <h2 className="text-[#BB9D7B]"> {userFirstname} </h2>
          </div>
          <div className="flex gap-1">
            User LasttName: <h2 className="text-[#BB9D7B]"> {userLastname} </h2>
          </div>
          <div className="flex gap-1">
            User email: <h2 className="text-[#BB9D7B]"> {userEmail} </h2>
          </div>
          <div className="flex gap-1">
            Username: <h2 className="text-[#BB9D7B]"> {username} </h2>
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed top-0 z-30 h-full w-full bg-black/70"
        ></div>
      )}
    </>
  );
};
export default UserSidebar;
