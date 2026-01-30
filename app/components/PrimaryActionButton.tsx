import Link from "next/link";

interface PrimaryActionButtonProps {
  href: string;
  color: "red" | "blue" | "yellow" | "green";
  icon?: string;
  children: React.ReactNode;
}

export default function PrimaryActionButton({
  href,
  color,
  icon,
  children,
}: PrimaryActionButtonProps) {
  // All buttons use the same red/yellow color scheme
  return (
    <Link
      href={href}
      className="px-8 py-8 rounded-xl text-lg font-bold transition-all duration-300 flex flex-col items-center justify-center gap-3 min-h-[160px] text-center transform hover:scale-105 hover:-translate-y-1 border-3"
      style={{
        backgroundColor: '#8b0000',
        color: '#ffffff',
        borderColor: '#ffffff',
        borderWidth: '3px',
        fontFamily: "'Times New Roman', Times, serif"
      }}
    >
      {icon && <span className="text-5xl drop-shadow-lg">{icon}</span>}
      <span className="leading-tight">{children}</span>
    </Link>
  );
}

