import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { setUnauthenticated } from "../../pages/auth.slice";


export interface MenuItem {
    title: string;
    icon: ReactElement;
    path: string;
}

type SideBarProps = {
    menuItems: MenuItem[],
}

export const SideBar = ({ menuItems }: SideBarProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch(setUnauthenticated());
        navigate("/admin");
    };

    return (
        <div className="p-4 pb-2">
            <motion.div
                className="h-full flex overflow-hidden rounded-lg flex-col justify-between"
                initial={{
                    width: 0,
                }}
                animate={{
                    width: 256,
                }}
                transition={{
                    duration: 1,
                }}
            >
                <div className="ps-2 ">
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
                                    opacity: 1,
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
                        <div className="flex w-full flex-colflex-1">
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
                                                    <span className="pt-[0.2rem]">{item.title}</span>
                                                </motion.div>
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white rounded-lg p-2 border-2 border-black">
                    <button className="btn btn-error"
                        onClick={() => logout()}>
                        <CiLogout size={24} />
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
