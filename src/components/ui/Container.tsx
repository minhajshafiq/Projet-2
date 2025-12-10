import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  return <div className={`container-app ${className}`}>{children}</div>;
}

