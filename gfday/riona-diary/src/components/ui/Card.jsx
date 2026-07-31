export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[#FFFDF8]
        rounded-3xl
        shadow-xl
        p-6
        border border-purple-100
        ${className}
      `}
    >
      {children}
    </div>
  );
}