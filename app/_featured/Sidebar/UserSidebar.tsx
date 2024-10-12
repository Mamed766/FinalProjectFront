import { IoMdCloseCircleOutline } from "react-icons/io";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
          <div>User</div>
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
