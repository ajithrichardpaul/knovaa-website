import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition duration-300">
      {children}
    </div>
  );
};

export default Card;