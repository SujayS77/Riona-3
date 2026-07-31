import { motion } from "framer-motion";

export default function Button({
  children,
  onClick,
  className = "",
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.96,
      }}
      transition={{
        duration: 0.15,
      }}
      onClick={onClick}
      className={`
        px-10
        py-3
        rounded-2xl
        bg-[#6C4AB6]
        text-white
        font-semibold
        shadow-xl
        hover:bg-[#5c3da0]
        transition-all
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}