import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useScrollPetCare } from "./hook";
import useCart from "../../shared/hook/useCart";

export const Header = () => {
  const { scrollYPosition } = useScrollPetCare();
  const navigate = useNavigate();
  const { cartData } = useCart()

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
                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733926645/bne3jly41v9kkojhvyxc.png"
                className="object-cover !text-red-500"
                alt=""
              />
            ) : (
              <img
                src="https://res.cloudinary.com/drni4vhwq/image/upload/v1733926667/p4wpcmaikldiicmwcrwx.png"
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
            {/* <li>
              <span onClick={() => (isAuth ? navigate("/account") : openAuthModal())}>
                <FaUserCircle size={28} />
              </span>
            </li> */}
            <li className="relative">
              <NavLink to={"/cart"} className="mt-1">
                <MdShoppingCartCheckout className="text-2xl" />
                {/* Vòng tròn hiển thị số */}
                {
                  !cartData.length ?
                    null
                    :
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                      {cartData.length}
                    </span>
                }
              </NavLink>
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
              {/* <li>
                <span onClick={() => (isAuth ? navigate("/account") : openAuthModal())}>
                  <FaUserCircle size={28} />
                </span>
              </li> */}
            </ul>
          </div>
        </div>
      </motion.div>
      {/* <AuthModal /> */}
    </div>

  );
};
