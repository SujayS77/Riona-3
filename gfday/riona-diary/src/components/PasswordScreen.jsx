import { useState } from "react";
import { motion } from "framer-motion";

import PageWrapper from "./ui/PageWrapper";
import Button from "./ui/Button";
import PinInput from "./ui/PinInput";

// Uncomment these once you've added the images
// import hogwarts from "../assets/images/hp/hogwarts.png";
// import frenchHorn from "../assets/images/himym/frenchhorn.png";

export default function PasswordScreen() {
  const [opened, setOpened] = useState(false);

  return (
    <PageWrapper>

      {/* Opening Screen (temporary placeholder) */}
      {opened && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#f8f4ff]">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl font-bold text-purple-700"
          >
            Opening Diary...
          </motion.h1>
        </div>
      )}

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div
          className="
            absolute
            -top-44
            left-1/2
            -translate-x-1/2
            h-[550px]
            w-[550px]
            rounded-full
            bg-purple-300/20
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            bottom-[-180px]
            right-[-100px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-violet-200/20
            blur-[180px]
          "
        />

      </div>

      {/* Hogwarts Image */}

      <div className="absolute left-12 bottom-0">

        {/* Replace this div with your image later */}

        <div className="w-72 h-96 rounded-3xl bg-purple-100 opacity-40" />

        {/*
        <img
            src={hogwarts}
            className="w-72 object-contain"
        />
        */}

      </div>

      {/* HIMYM Image */}

      <div className="absolute right-12 bottom-0">

        {/* Replace later */}

        <div className="w-60 h-72 rounded-3xl bg-purple-100 opacity-40" />

        {/*
        <img
            src={frenchHorn}
            className="w-60 object-contain"
        />
        */}

      </div>

      {/* Center Content */}

      <div className="relative z-20 flex h-full flex-col items-center justify-center">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            text-6xl
            font-bold
            text-[#4B2E83]
            font-[Playfair_Display]
            text-center
          "
        >
          Happy Girlfriend's Day
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="
            mt-3
            text-5xl
            text-[#6C4AB6]
            font-[Caveat]
          "
        >
          Riona
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-10
            max-w-xl
            text-center
            italic
            text-gray-600
            leading-8
          "
        >
          "10 saal ke baad issi station pe wapas aayenge...
          aaj hi ke din... dekhenge kaun zyada successful hai...
          tum ya mai... Hai himmat? Ayega?"
        </motion.p>

        <p className="mt-6 text-sm italic text-gray-500">
          Hint : 10 saal ke baad...
        </p>

        <PinInput
          onComplete={() => setOpened(true)}
        />

        <div className="mt-8">
          <Button>
            Open Diary
          </Button>
        </div>

      </div>

    </PageWrapper>
  );
}