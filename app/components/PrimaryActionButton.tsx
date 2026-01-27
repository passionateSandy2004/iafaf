import Link from "next/link";

interface PrimaryActionButtonProps {
  href: string;
  color: "red" | "blue" | "yellow" | "green";
  icon?: string;
  children: React.ReactNode;
}

const colorClasses = {
  red: "text-white border-2 border-red-900/20",
  blue: "bg-gradient-to-br from-[#bd1c0d] to-[#d32f2f] hover:from-[#bd1c0d] hover:to-[#bd1c0d] text-white border-2 border-red-900/20",
  yellow: "text-gray-900 border-2 border-yellow-700/30",
  green: "bg-gradient-to-br from-[#2e7d32] to-[#388e3c] hover:from-[#1b5e20] hover:to-[#2e7d32] text-white border-2 border-green-900/20",
};

export default function PrimaryActionButton({
  href,
  color,
  icon,
  children,
}: PrimaryActionButtonProps) {
  const bgStyle = color === 'red' 
    ? { backgroundColor: '#bd1c0d' }
    : color === 'yellow'
    ? { backgroundColor: '#f4ecb3' }
    : {};
    
  return (
    <Link
      href={href}
      className={`${colorClasses[color]} px-8 py-8 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[160px] text-center transform hover:scale-105 hover:-translate-y-1`}
      style={{...bgStyle, fontFamily: 'var(--font-cinzel), Cinzel, serif'}}
    >
      {icon && <span className="text-5xl drop-shadow-lg">{icon}</span>}
      <span className="leading-tight">{children}</span>
    </Link>
  );
}

