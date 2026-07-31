import { motion } from "framer-motion";
import { FiHome, FiBookOpen, FiClock, FiHeart } from "react-icons/fi";

const NAV_ITEMS = [
  { key: "home", label: "Home", icon: FiHome },
  { key: "diary", label: "My Diary", icon: FiBookOpen },
  { key: "timeline", label: "Our Timestamp", icon: FiClock },
  { key: "riona", label: "Eh, srsly?", icon: FiHeart },
];

export default function Sidebar({ active, setActive }) {
  return (
    <aside
      className="
        relative flex h-full w-64 flex-shrink-0 flex-col justify-between
        border-r border-purple-100
        bg-gradient-to-b from-[#6C4AB6] to-[#4B2E83]
        px-6 py-10 text-white
      "
    >
      <div>
        <h2 className="font-[Playfair_Display] text-2xl font-semibold tracking-wide">
          Riona
        </h2>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-purple-200/70">
          a little world, just for you
        </p>

        <nav className="mt-12 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.key;
            const Icon = item.icon;

            return (
              <button
                key={item.key}
                onClick={() => setActive(item.key)}
                className="
                  relative flex items-center gap-3 rounded-2xl
                  px-4 py-3 text-left text-sm font-medium
                  transition-colors
                "
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 rounded-2xl bg-white/15 shadow-inner"
                  />
                )}

                <Icon
                  className={`relative z-10 h-[18px] w-[18px] transition-opacity ${
                    isActive ? "opacity-100" : "opacity-60"
                  }`}
                />

                <span
                  className={`relative z-10 transition-opacity ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <p className="text-[11px] leading-relaxed text-purple-200/50">
        made with a little too much love.
      </p>
    </aside>
  );
}
