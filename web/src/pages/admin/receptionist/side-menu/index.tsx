import { motion } from "framer-motion";

export const SideMenu = () => {
  return (
    <div>
      <motion.div
        className="h-full overflow-hidden bg-slate-300"
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
        <div className="p-2">
          <div className="flex">
            <div className="avatar">
              <div className="mask mask-squircle w-16">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <motion.div
              className="flex flex-col justify-center pl-4"
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
        </div>
      </motion.div>
    </div>
  );
};
