import { useRouter } from "next/navigation";

interface ButtonProps {
  className?: string;
  icon?: any;
  label: string;
  onClick?: () => void; // Menambahkan prop onClick yang bersifat opsional
}

export default function Button({
  className,
  onClick,
  label,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center gap-1 justify-center bg-primary rounded-lg  font-semibold tracking-wide transition-all duration-150 ease-in-out hover:border-secondary border border-transparent active:scale-90`}
    >
      {icon && icon}
      {label}
    </button>
  );
}
