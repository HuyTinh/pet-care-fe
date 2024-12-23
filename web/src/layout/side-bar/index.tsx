import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUnauthenticated } from "../../pages/auth.slice";
import { RootState } from "../../store/store";
import { useGetEmployeeProfileQuery } from "../../pages/admin/employee.service";
import { IEmployee } from "../../@types/employee.type";


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
    const [expand, setExpand] = useState(false)
    const userId = useSelector((state: RootState) => state.authentication.userId);
    const [userCurrent, setUserCurrent] = useState<IEmployee>();
    const { data: employeeProfileResponse, isLoading: employeeProfileResponseIsLoading } = useGetEmployeeProfileQuery(
        {
            userId,
        },
        { skip: !userId },
    );

    useEffect(() => {
        setUserCurrent(employeeProfileResponse?.data)
    }, [employeeProfileResponse])


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
                    width: expand ? 224 : 82,
                }}
                transition={{
                    duration: .5,
                }}
            >
                <div className="ps-2 ">
                    <div className="flex flex-col">
                        <div className="flex p-2 cursor-pointer" onClick={() =>
                            // (document.getElementById("admin_profile_modal") as any)?.showModal()
                            setExpand(!expand)
                        }>
                            {
                                !employeeProfileResponseIsLoading ?
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-16">
                                            <img src={userCurrent?.image_url} />
                                        </div>
                                    </div> :
                                    <div className="skeleton mask mask-squircle h-16 w-16"></div>
                            }
                            <motion.div
                                className={`left-0 text-white w-full relative`}
                                initial={{ opacity: 0, display: "" }}
                                animate={{
                                    opacity: 1,
                                    display: "",
                                }}
                                transition={{
                                    delay: 1,
                                    duration: 1
                                }}
                            >
                                <div className={`flex flex-col justify-center items-center w-40 h-full absolute overflow-hidden`}>
                                    <div>Welcome back</div>
                                    {
                                        !employeeProfileResponseIsLoading ?
                                            <div>{userCurrent?.first_name + " " + userCurrent?.last_name}</div> :
                                            <div className="skeleton h-6 w-full"></div>
                                    }
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex w-full flex-colflex-1">
                            <div className="flex flex-1">
                                <div className="absolute left-8 z-10 space-y-5 ps-2 pt-5">
                                    {menuItems.map((item, index) => (
                                        <NavLink
                                            end
                                            to={item.path}
                                            key={index}
                                            className="block"
                                            children={({ isActive }) => (
                                                <motion.div
                                                    className={`flex w-[16rem] items-center gap-x-2 rounded-tl-xl bg-white px-2 py-2 text-black outline outline-2 outline-black transition hover:bg-blue-700 hover:text-white`}
                                                    animate={{
                                                        background: isActive ? "rgb(29 78 216)" : "",
                                                        color: isActive ? "rgb(255 255 255)" : "",
                                                        scale: isActive ? "1.1" : "1",
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
            </motion.div >
        </div >
    );
};
