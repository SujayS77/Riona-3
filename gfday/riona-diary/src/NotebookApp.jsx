import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

export default function NotebookApp() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home />;

      case "diary":
        return (
          <div className="flex h-full items-center justify-center">
            <h1 className="font-[Playfair_Display] text-5xl text-purple-700">My Diary</h1>
          </div>
        );

      case "timeline":
        return (
          <div className="flex h-full items-center justify-center">
            <h1 className="font-[Playfair_Display] text-5xl text-purple-700">Our Timestamp</h1>
          </div>
        );

      case "riona":
        return (
          <div className="flex h-full items-center justify-center">
            <h1 className="font-[Playfair_Display] text-5xl text-purple-700">Eh, srsly?</h1>
          </div>
        );

      default:
        return <Home />;
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#efe6ff] via-[#f7f3ff] to-[#ffffff]" />
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-purple-300/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-200/30 blur-[150px]" />

      <div className="relative flex h-full items-center justify-center p-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="
            relative flex h-[88vh] w-[92vw] max-w-[1500px] overflow-hidden
            rounded-[40px] border border-purple-200 bg-[#FFF9ED]
            shadow-[0_40px_90px_rgba(0,0,0,0.18)]
          "
        >
          <Sidebar active={activePage} setActive={setActivePage} />

          <div className="relative flex-1 overflow-hidden bg-[#fffdf7]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
                className="h-full w-full"
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
