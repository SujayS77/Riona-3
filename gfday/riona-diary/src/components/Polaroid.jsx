import { motion } from "framer-motion";

export default function Polaroid({ src, caption, rotate = -4, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate * 1.5 }}
      animate={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative w-48 select-none bg-white p-3 pb-6 shadow-[0_18px_35px_rgba(76,46,131,0.18)] ${className}`}
    >
      <div className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 -rotate-2 bg-purple-100/70 shadow-sm" />

      <div className="aspect-[4/5] w-full overflow-hidden bg-purple-50">
        {src ? (
          <img src={src} alt={caption || ""} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[11px] uppercase tracking-wide text-purple-300">
            photo
          </div>
        )}
      </div>

      {caption && (
        <p className="mt-3 text-center font-[Caveat] text-lg text-purple-700">
          {caption}
        </p>
      )}
    </motion.div>
  );
}
