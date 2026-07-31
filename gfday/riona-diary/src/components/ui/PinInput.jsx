import { useRef, useState } from "react";
import { motion } from "framer-motion";

const PASSWORD = "1509";

export default function PinInput({ onComplete }) {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [shake, setShake] = useState(false);

  const refs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const check = (values) => {
    const entered = values.join("");

    if (entered.length !== 4) return;

    if (entered === PASSWORD) {
      onComplete();
    } else {
      setShake(true);

      setTimeout(() => {
        setShake(false);
        setPin(["", "", "", ""]);
        refs[0].current.focus();
      }, 500);
    }
  };

  const handle = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const next = [...pin];
    next[index] = value;

    setPin(next);

    if (value && index < 3)
      refs[index + 1].current.focus();

    check(next);
  };

  return (
    <motion.div
      animate={shake ? { x: [-12, 12, -12, 12, 0] } : {}}
      className="flex gap-5 mt-8"
    >
      {pin.map((digit, index) => (
        <input
          key={index}
          ref={refs[index]}
          value={digit}
          maxLength={1}
          type="password"
          inputMode="numeric"
          onChange={(e) => handle(e.target.value, index)}
          className="
          w-16
          h-20
          rounded-2xl
          text-center
          text-3xl
          bg-white/80
          border
          border-purple-300
          outline-none
          shadow-lg
          focus:ring-4
          focus:ring-purple-300
          "
        />
      ))}
    </motion.div>
  );
}