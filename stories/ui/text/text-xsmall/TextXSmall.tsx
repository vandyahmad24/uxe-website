import React from 'react';
import cn from 'classnames';

// Define the properties for the TextXSmall component
interface TextXSmallProps {
  cls?: string;             // Additional classes for styling
  label: string;            // Text content of the title
  hover?: boolean;           // Whether to apply hover styles
  decoration?: boolean;      // Whether to apply decoration styles
  el?: "p" | "a" | "button"; // HTML element type
  href?: string;            // URL for 'a' element
  onClick?: () => void;     // Click event handler
}

// TextXSmall component definition
export const TextXSmall = ({
  label,
  decoration = false,
  hover = false,
  el = "p",
  cls,
  ...props
}: TextXSmallProps) => {
  // Dynamically determine the HTML element based on the 'el' prop
  const ElTag = `${el}` as keyof JSX.IntrinsicElements;

  // Render the TextXSmall component
  return (
    <ElTag
      className={cn(`text-xsmall ${cls}`, {
        "text-xsmall--hover" : hover,
        "text-xsmall--decoration" : decoration,
      })}
      {...props}
    >
      {label}
    </ElTag>
  );
};

// Example usage:
// <TextXSmall label="Hello World" decoration hover el="h1" cls="custom-class" />
