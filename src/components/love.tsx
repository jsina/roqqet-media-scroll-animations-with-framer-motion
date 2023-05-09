import { motion } from "framer-motion";

const heartVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};
export function Love() {
  return (
    <motion.div className="flex items-center justify-center">
      <motion.img
        src="/heart.svg"
        variants={heartVariants}
        whileInView={{
          scale: 1.1,
          transition: {
            duration: 0.3,
            repeatType: "mirror",
            repeat: 11,
          },
        }}
        transition={{}}
        className="w-12"
      />
    </motion.div>
  );
}
