import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({
  children,
  variant = "primary",
}: ButtonProps) => {
  const base =
    "px-8 py-4 rounded-full transition duration-300 font-medium";

  const styles =
    variant === "primary"
      ? "bg-pink-600 hover:bg-pink-500 text-white"
      : "border border-white/20 text-white hover:border-pink-500";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
};

export default Button;