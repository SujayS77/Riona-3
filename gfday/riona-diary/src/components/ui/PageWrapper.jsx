import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-[#faf6ff] via-[#f2ebff] to-[#fcfbff]"
    >
      {children}
    </motion.div>
  );
}