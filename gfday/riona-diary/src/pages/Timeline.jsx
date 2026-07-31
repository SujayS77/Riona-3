import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// first event's date — used for the "days and counting" counter up top
const START_DATE = "2020-10-01";

/**
 * TIMELINE EVENTS
 * Add a new memory by adding another object to this array — same idea as the diary.
 */
const EVENTS = [
  { date: "1 October 2020", time: "3:00 pm", title: "Our First Conversation" },
  { date: "1 October 2020", time: "4:09 pm", title: "Our First DM Text" },
  { date: "7 November 2020", time: "5:43 pm", title: "We Started Online Dating" },
  { date: "28 November 2020", time: "3:14 pm", title: "First WhatsApp Text" },
  { date: "7 December 2020", time: "1:41 pm", title: 'You Technically Proposed — "Ok can I call u my bf"' },
  // keep going: { date: "...", time: "...", title: "..." },
];

function daysSince(dateStr) {
  const start = new Date(dateStr);
  const now = new Date();
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
}

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative flex h-full w-full flex-col px-16 py-12">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            receipts, in chronological order
          </p>
          <h1 className="mt-1 font-[Playfair_Display] text-4xl font-semibold text-[#4B2E83]">
            Our Timestamp
          </h1>
        </div>

        {/*
          Optional corner artwork slot (e.g. your own saved Zootopia image).
          Save a file to src/assets/images/zootopia/corner.png, import it up top,
          then replace this dashed div with <img src={cornerArt} className="h-16 w-auto" />
        */}
        <div className="hidden h-16 w-32 flex-shrink-0 items-center justify-center rounded-xl border border-dashed border-purple-200 text-[10px] uppercase tracking-widest text-purple-300 sm:flex">
          image slot
        </div>

        <div className="flex-shrink-0 text-right">
          <p className="font-[Playfair_Display] text-3xl text-purple-600">
            {daysSince(START_DATE)}
          </p>
          <p className="text-[11px] uppercase tracking-widest text-purple-300">
            days and counting
          </p>
        </div>
      </div>

      <div ref={containerRef} className="relative mt-10 flex-1 overflow-y-auto pr-4">
        {/* base line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[3px] rounded-full bg-purple-100" />
        {/* progress line — fills in as you scroll down the page */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-[7px] top-2 w-[3px] rounded-full bg-gradient-to-b from-purple-400 to-fuchsia-400"
        />

        <div className="flex flex-col gap-10 pb-4">
          {EVENTS.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
              className="relative pl-10"
            >
              <span className="absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-4 border-white bg-purple-500 shadow-[0_0_0_4px_rgba(168,85,247,0.15)]" />

              <div
                className="
                  group rounded-2xl border border-purple-100 bg-white/70 p-5
                  shadow-[0_10px_25px_rgba(108,74,182,0.08)] backdrop-blur-sm
                  transition-all hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(108,74,182,0.18)]
                "
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-purple-400">
                  {event.date} — {event.time}
                </p>
                <h3 className="mt-1 font-[Playfair_Display] text-xl font-semibold text-[#3d2566]">
                  {event.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
