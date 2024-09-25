import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useScrollPetCare } from "./hook";
import { FaUserCircle } from "react-icons/fa";
import { useModalPetCare } from "../../../../components/pc-modal/hook";
import { AuthModal } from "../../auth";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";

export const Header = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const { scrollYPosition } = useScrollPetCare();
  const navigate = useNavigate();
  const { openModalPetCare } = useModalPetCare();

  return (
    <div>
      <motion.div
        className="navbar fixed z-50 border-b bg-transparent px-16"
        initial={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          paddingTop: "1.7rem",
          paddingBottom: "1.7rem",
        }}
        animate={{
          backgroundColor:
            scrollYPosition > 100
              ? `rgba(255, 255, 255, 0.8)`
              : "rgba(0, 0, 0, 0.2)",
          paddingBottom: scrollYPosition > 100 ? "1rem" : "1.7rem",
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
            onClick={() => navigate("/")}
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
              <NavLink to={"/"}>Home</NavLink>
            </li>

            {/* <li>
              <a>Link</a>
            </li> */}
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/booking"}>Booking</NavLink>
            </li>
            <li>
              <span
                onClick={() =>
                  isAuth ? navigate("/profile") : openModalPetCare()
                }
              >
                <FaUserCircle size={28} />
              </span>
            </li>
          </motion.ul>
        </div>
      </motion.div>
      {!isAuth && <AuthModal />}
    </div>
  );
};
