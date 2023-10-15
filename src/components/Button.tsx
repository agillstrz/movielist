interface ButtonProps {
  className: string;
  label: string;
  onClick?: () => void; // Menambahkan prop onClick yang bersifat opsional
}

export default function Button({ className, onClick, label }: ButtonProps) {
  return (
    <button onClick={onClick} className={`${className} bg-primary rounded-lg `}>
      {label}
    </button>
  );
}
