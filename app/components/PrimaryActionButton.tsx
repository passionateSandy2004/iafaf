import Link from "next/link";

interface PrimaryActionButtonProps {
  href: string;
  color: "red" | "blue" | "yellow" | "green";
  icon?: string;
  children: React.ReactNode;
}

const colorClasses = {
  red: "bg-gradient-to-br from-[#c62828] to-[#d32f2f] hover:from-[#b71c1c] hover:to-[#c62828] text-white border-2 border-red-800/20",
  blue: "bg-gradient-to-br from-[#1565c0] to-[#1976d2] hover:from-[#0d47a1] hover:to-[#1565c0] text-white border-2 border-blue-900/20",
  yellow: "bg-gradient-to-br from-[#f57c00] to-[#fb8c00] hover:from-[#e65100] hover:to-[#f57c00] text-white border-2 border-orange-900/20",
  green: "bg-gradient-to-br from-[#2e7d32] to-[#388e3c] hover:from-[#1b5e20] hover:to-[#2e7d32] text-white border-2 border-green-900/20",
};

export default function PrimaryActionButton({
  href,
  color,
  icon,
  children,
}: PrimaryActionButtonProps) {
  return (
    <Link
      href={href}
      className={`${colorClasses[color]} px-8 py-8 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[160px] text-center transform hover:scale-105 hover:-translate-y-1`}
    >
      {icon && <span className="text-5xl drop-shadow-lg">{icon}</span>}
      <span className="leading-tight">{children}</span>
    </Link>
  );
}

