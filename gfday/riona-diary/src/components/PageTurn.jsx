import { motion, AnimatePresence } from "framer-motion";

export default function PageTurn({ pageKey, children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageKey}
        initial={{ opacity: 0, rotateY: -10, x: 40 }}
        animate={{ opacity: 1, rotateY: 0, x: 0 }}
        exit={{ opacity: 0, rotateY: 10, x: -40 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        style={{ transformPerspective: 1200 }}
        className="h-full w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
