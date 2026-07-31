import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import PageTurn from "../components/PageTurn";

/**
 * DIARY ENTRIES
 * To add a new page, just add another object to this array.
 * date  -> shown as the little tag at the top of the page
 * title -> shown big, at the top
 * body  -> the actual written note. Use "\n\n" for a new paragraph.
 */
const ENTRIES = [
  {
    date: "[[ date ]]",
    title: "[[ entry title ]]",
    body: "[[ write the entry here — send me the real text and I'll drop it straight into this array, one object per page. ]]",
  },
  {
    date: "[[ date ]]",
    title: "[[ entry title ]]",
    body: "[[ second entry goes here ]]",
  },
];

export default function Diary() {
  const [page, setPage] = useState(0);

  const entry = ENTRIES[page];
  const atStart = page === 0;
  const atEnd = page === ENTRIES.length - 1;

  const goPrev = () => !atStart && setPage((p) => p - 1);
  const goNext = () => !atEnd && setPage((p) => p + 1);

  return (
    <div className="relative flex h-full w-full flex-col px-16 py-12">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
            my diary
          </p>
          <h1 className="mt-1 font-[Playfair_Display] text-4xl font-semibold text-[#4B2E83]">
            {entry.title}
          </h1>
        </div>
        <p className="text-sm italic text-gray-400">{entry.date}</p>
      </div>

      {/* the page itself — ruled paper look */}
      <div
        className="
          relative mt-8 flex-1 overflow-y-auto rounded-2xl
          border border-purple-100 bg-[#FFFDF8] p-10
          shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
        "
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent, transparent 38px, rgba(108,74,182,0.12) 39px)",
        }}
      >
        {/* margin line */}
        <div className="pointer-events-none absolute bottom-6 left-14 top-6 w-px bg-purple-200/60" />

        <PageTurn pageKey={page}>
          <p className="max-w-2xl whitespace-pre-line pl-6 font-[Caveat] text-2xl leading-10 text-gray-700">
            {entry.body}
          </p>
        </PageTurn>
      </div>

      {/* navigation */}
      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          disabled={atStart}
          className="rounded-full border border-purple-200 p-2 text-purple-500 transition-opacity disabled:opacity-30"
        >
          <FiChevronLeft size={18} />
        </button>

        <span className="text-xs tracking-widest text-purple-400">
          page {page + 1} of {ENTRIES.length}
        </span>

        <button
          onClick={goNext}
          disabled={atEnd}
          className="rounded-full border border-purple-200 p-2 text-purple-500 transition-opacity disabled:opacity-30"
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
