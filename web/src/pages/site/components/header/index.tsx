import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { CiUser } from "react-icons/ci";

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
        className="z-50 navbar fixed border-b bg-transparent px-16"
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
            <li>
            <CiUser className='User w-[50px]' onClick={() => (document.getElementById('my_modal_2') as any )?.showModal()} />
            <dialog className="M02 modal" id="my_modal_2" >
          <div className="M03 modal-box max-w-2xl">
            <div className="M04 flex">
              <div className="M05 w-1/2 bg-blue-500 p-8 text-white flex flex-col text-center">
                <h1 className="text-4xl font-bold mb-14">Welcome to</h1>
                <div className=" mb-4 mx-12">
                  <img
                    // src={logoNB}
                    alt="Pet Care Logo"
                    className="w-36 h-36"
                  />
                </div>
                <span className="ml-4 text-2xl">PET CARE</span>
                <p className="text-lg mb-4">WHO CARE YOU PET</p>

                <div className='mt-16'>
                  Create:<a href="#" className="underline text-white mr-2"> HERE</a>
                  Forgot Password:<a href="#" className="underline text-white"> HERE</a>
                </div>
              </div>

              <div className="w-1/2 p-8">
                <h2 className="text-2xl font-semibold mb-6 text-center">CREATE ACCOUNT</h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-gray-700">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                    >
                      SIGN UP
                    </button>
                    <button className="text-gray-500 border border-gray-300 px-6 py-2 rounded-lg">
                      SIGN IN
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
