import { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <article className={`bg-white rounded-2xl shadow-card overflow-hidden ${className}`}>
      {children}
    </article>
  );
}

