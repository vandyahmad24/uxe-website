import React from 'react';
import cn from 'classnames';

// Define the properties for the TitleLarge component
interface TitleLargeProps {
  cls?: string;          // Additional classes for styling
  label: string;         // Text content of the title
  hover?: boolean;        // Whether to apply hover styles
  decoration?: boolean;   // Whether to apply decoration styles
  el?: "a" | "button" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // HTML element type
  href?: string;         // URL for 'a' element
  onClick?: () => void;  // Click event handler
  style?: any;
}

// TitleLarge component definition
export const TitleLarge = ({
  label,
  decoration = false,
  hover = false,
  el = "h2",
  cls,
  ...props
}: TitleLargeProps) => {
  // Dynamically determine the HTML element based on the 'el' prop
  const ElTag = `${el}` as keyof JSX.IntrinsicElements;

  // Render the TitleLarge component
  return (
    <ElTag
      className={cn(`title-large ${cls}`, {
        "title-large--hover" : hover,
        "title-large--decoration" : decoration,
      })}
      {...props}
    >
      {label}
    </ElTag>
  );
};

// Example usage:
// <TitleLarge label="Hello World" decoration hover el="h1" cls="custom-class" />
