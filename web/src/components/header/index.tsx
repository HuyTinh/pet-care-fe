import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useScrollPetCare } from "./hook";
import { FaUserCircle } from "react-icons/fa";
import { AuthModal } from "../../pages/site/auth";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

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
        className="navbar fixed z-[999] border-b bg-transparent px-4 sm:px-8 md:px-16"
        initial={{
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          paddingTop: "1.7rem",
          paddingBottom: "1.7rem",
        }}
        animate={{
          backgroundColor:
            scrollYPosition > 100 ? `rgba(255, 255, 255, 0.8)` : "rgba(0, 0, 0, 0.1)",
          paddingBottom: scrollYPosition > 100 ? "1rem" : "1.7rem",
          paddingTop: scrollYPosition > 100 ? "1rem" : "1.7rem",
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <div className="navbar-start">
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
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 px-1 text-xl">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/booking"}>Booking</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
            <li>
              <NavLink to={"/event"}>Event</NavLink>
            </li>
            <li>
              <span onClick={() => (isAuth ? navigate("/account") : openAuthModal())}>
                <FaUserCircle size={28} />
              </span>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <div className="dropdown">
            <div role="button" tabIndex={0} className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/service"}>Service</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/booking"}>Booking</NavLink>
              </li>
              <li>
                <NavLink to={"/blog"}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={"/event"}>Event</NavLink>
              </li>
              <li>
                <span onClick={() => (isAuth ? navigate("/account") : openAuthModal())}>
                  <FaUserCircle size={28} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <AuthModal />
    </div>

  );
};
