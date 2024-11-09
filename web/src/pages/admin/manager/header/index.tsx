import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useScrollPetCare } from "./hook";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { AuthModal } from "../../../site/auth";

const openAuthModal = () => {
  (document.getElementById("authentication_modal") as any).showModal();
};

export const Header = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const { scrollYPosition } = useScrollPetCare();
  const navigate = useNavigate();

  return (
    <div>
      <motion.div
        className="navbar fixed z-[999] border-b bg-transparent px-16"
        initial={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          paddingTop: "1.7rem",
          paddingBottom: "1.7rem",
        }}
        animate={{
          backgroundColor:
            scrollYPosition > 100
              ? `rgba(255, 255, 255, 0.8)`
              : "rgba(0, 0, 0, 0.7)",
          paddingBottom: scrollYPosition > 100 ? "1rem" : "1.7rem",
          paddingTop: scrollYPosition > 100 ? "1rem" : "1.7rem",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="flex-1">
          <motion.div
            initial={{
              width: "14rem",
            }}
            animate={{
              width: scrollYPosition > 100 ? "14rem" : "16rem",
            }}
            onClick={() => navigate("/manager")}
            className="cursor-pointer"
          >
            {scrollYPosition > 100 ? (
              <img
                src="/src/assets/images/login_logo_admin_blue.png"
                className="object-cover !text-red-500"
                alt=""
              />
            ) : (
              <img
                src="/src/assets/images/login_logo_admin.png"
                className="object-cover !text-red-500"
                alt=""
              />
            )}
          </motion.div>
        </div>
        <div className="flex-none">
          <motion.ul
            initial={{
              color: "#FFFFFF",
            }}
            animate={{
              color: scrollYPosition > 100 ? "#000000" : "#FFFFFF",
            }}
            className="menu menu-horizontal space-x-5 px-1 text-xl"
          >
            <li>
              <NavLink end to={"/manager"}>Home</NavLink>
            </li>
            <li>
              <p>Customers</p>
              {/* <NavLink to={"/service"}>Customers</NavLink> */}
            </li>
            {/* <li>
              <a>Link</a>
            </li> */}
            <li>
              <p>Employees</p>
              {/* <NavLink to={"/booking"}>Employees</NavLink> */}
            </li>
            <li>
              <p>Appointments</p>
              {/* <NavLink to={"/blog"}>Appointments</NavLink> */}
            </li>
            <li>
              <NavLink to={"/manager/serivces"}>Serivces</NavLink>
            </li>
            <li>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} >Report</div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content rounded-box -z-10 mt-52 w-52 p-2 bg-white border border-gray-950 ">
                  <li>
                    <NavLink to={"/manager/report/appointment"} className="text-black">Appointment</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/manager/report/service"} className="text-black">Service</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/manager/report/revenue"} className="text-black">Revenue</NavLink>
                  </li>
                  <li>
                    <a className="text-black">Medicine</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span
                onClick={() =>
                  isAuth ? navigate("/account") : openAuthModal()
                }
              >
                <FaUserCircle size={28} />
              </span>
            </li>
          </motion.ul>
        </div>
      </motion.div>
      <AuthModal />
    </div>
  );
};
