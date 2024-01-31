import React from 'react';
import cn from 'classnames';

// Define the properties for the TextMedium component
interface TextMediumProps {
  cls?: string;             // Additional classes for styling
  label: any;            // Text content of the title
  hover?: boolean;           // Whether to apply hover styles
  decoration?: boolean;      // Whether to apply decoration styles
  el?: "p" | "a" | "button"; // HTML element type
  href?: string;            // URL for 'a' element
  onClick?: () => void;     // Click event handler
}

// TextMedium component definition
export const TextMedium = ({
  label,
  cls,
  decoration = false,
  hover = false,
  el = "p",
  ...props
}: TextMediumProps) => {
  // Dynamically determine the HTML element based on the 'el' prop
  const ElTag = `${el}` as keyof JSX.IntrinsicElements;

  // Render the TextMedium component
  return (
    <ElTag
      className={cn(`text-medium ${cls}`, {
        "text-medium--hover" : hover,
        "text-medium--decoration" : decoration,
      })}
      {...props}
    >
      {label}
    </ElTag>
  );
};

// Example usage:
// <TextMedium label="Hello World" decoration hover el="h1" cls="custom-class" />
