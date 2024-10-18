import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { CiCalendar, CiCircleInfo } from "react-icons/ci";
import { ReactElement, useState } from "react";
// import { FaBars } from "react-icons/fa6";


interface MenuItem {
  title: string;
  icon: ReactElement;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    title: "Appointment",
    icon: <CiCalendar size={32} />,
    path: "/receptionist",
  },
  {
    title: "Guide",
    icon: <CiCircleInfo size={32} />,
    path: "/guide",
  },
];



export const SideMenu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const ToggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-4 pb-2 pr-0">
      <motion.div
        className="h-full overflow-hidden rounded-lg"
        initial={{
          width: 0,
        }}
        animate={{
          width: isOpen ? '88px' : 265,
          opacity: isOpen ? '0px' : 100,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="">
          <button className="w-[30px] h-[30px] mx-5" onClick={ToggleContent}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M3 12H21M3 6H21M3 18H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
            </svg>
          </button>
        </div>
        <div className="ps-2">
          <div className="flex flex-col">
            <div className="flex p-2">
              <div className="avatar">
                <div className="mask mask-squircle w-16">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <motion.div
                className="flex flex-col justify-center pl-4 text-white"
                initial={{ opacity: 0, display: "none" }}
                animate={{
                  opacity: isOpen ? 0 : 1,
                  display: "",
                }}
                transition={{
                  delay: 0.8,
                }}
              >
                <div>Welcome back</div>
                <div>Huy tinhs</div>
              </motion.div>
            </div>
            <div className="flex w-full flex-col">
              <div className="flex flex-1">

                <div className="absolute left-8 z-10 space-y-5 ps-2 pt-5">
                  {menuItems.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      className="block"
                      children={({ isActive }) => (
                        <motion.div
                          className={`flex w-[16rem] items-center gap-x-2 rounded-tl-xl bg-white px-2 py-2 text-black outline outline-2 outline-black transition hover:bg-blue-700 hover:text-white`}
                          animate={{
                            background: isActive ? "rgb(29 78 216)" : "",
                            color: isActive ? "rgb(255 255 255)" : "",
                            scale: isActive ? "1.1" : "",
                          }}
                        >
                          {item.icon}
                          <motion.span className="pt-[0.2rem]" animate={{
                            opacity: isOpen ? 0 : 1,
                            display: "",
                          }}>{item.title}</motion.span>
                        </motion.div>
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
