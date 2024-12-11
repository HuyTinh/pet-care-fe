import { useInView, motion } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimateSectionProps = {
  children: ReactNode;
};

export const AnimateSection = ({ children }: AnimateSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section ref={ref}>
      <motion.section
        style={{
          transform: isInView ? "none" : "translateY(150px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        {children}
      </motion.section>
    </motion.section>
  );
};
