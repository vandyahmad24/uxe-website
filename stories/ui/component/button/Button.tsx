import React from 'react';

interface ButtonProps {
  label: string;
  backgroundColor: string;
  color: string;
  el: 'a' | 'button';
  href?: string;
  onClick?: () => void;
  style?: any;
}

export const Button = ({
  label,
  backgroundColor = "#19191B",
  color = "white",
  el = 'button',
  ...props
}: ButtonProps) => {
  const TagElement = `${el}` as keyof JSX.IntrinsicElements;
  return (
    <TagElement
      className={`nbutton`}
      {...props}
    >
      {label}
      <style jsx>{`
        .nbutton {
          background-color: ${backgroundColor};
          color: ${color};
        }
      `}</style>
    </TagElement>
  );
};
