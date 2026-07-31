import { motion } from "framer-motion";
import Polaroid from "../components/Polaroid";

export default function Home() {
  return (
    <div className="relative h-full w-full overflow-y-auto px-16 py-14">

      <svg
        className="pointer-events-none absolute right-10 top-8 h-20 w-20 text-purple-200"
        viewBox="0 0 100 100"
        fill="none"
      >
        <path d="M10 90 C 40 90, 90 60, 90 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="90" cy="10" r="4" fill="currentColor" />
      </svg>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xs uppercase tracking-[0.3em] text-purple-400"
      >
        page one
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-2 font-[Playfair_Display] text-5xl font-semibold text-[#4B2E83]"
      >
        for Riona
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-10 max-w-xl font-[Lora] text-[17px] leading-9 text-gray-700"
      >
        <p className="whitespace-pre-line">
          {"[[ the welcome letter goes here — send me the words and I'll set it in this same layout ]]"}
        </p>

        <p className="mt-8 font-[Caveat] text-2xl text-purple-600">
          — always, Sujay
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-16 flex flex-wrap items-end gap-8"
      >
        <Polaroid rotate={-6} caption="us" />
        <Polaroid rotate={4} caption="that day" className="mt-4" />
        <Polaroid rotate={-3} caption="favourite" className="-mt-2" />
      </motion.div>

    </div>
  );
}
