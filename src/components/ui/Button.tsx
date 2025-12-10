import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
};

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-colors';
  const variants = {
    primary: 'bg-primary text-white px-5 py-3 hover:bg-primaryDark',
    ghost: 'bg-transparent text-primary px-4 py-2 hover:bg-primary/10',
  };
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />;
}

