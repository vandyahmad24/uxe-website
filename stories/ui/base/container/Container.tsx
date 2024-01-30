import React, { ReactNode } from 'react';

interface ContainerProps {
  size?: 'small' | 'medium' |'xmedium' | 'large';
  children?: ReactNode;
  cls?: string;
}

export const Container = ({
  size = 'large',
  children,
  cls,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={`container--${size} ${cls}`}
      {...props}
    >
      {children}
    </div>
  );
};
