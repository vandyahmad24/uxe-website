import React, { ReactNode } from 'react';

interface ContainerProps {
  size?: 'small' | 'medium' |'xmedium' | 'large' | 'xlarge' | 'full';
  children?: ReactNode;
  cls?: string;
  style?: object
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
