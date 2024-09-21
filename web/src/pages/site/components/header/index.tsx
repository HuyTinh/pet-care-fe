import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="navbar fixed border-b bg-transparent px-16"
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
            className="menu menu-horizontal px-1 text-xl"
          >
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Link</a>
            </li>
            <li>
              <NavLink to={"/booking"}>Booking</NavLink>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
