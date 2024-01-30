import React from 'react';
import cn from 'classnames';

// Define the properties for the TitleXSmall component
interface TitleXSmallProps {
  cls?: string;          // Additional classes for styling
  label: string;         // Text content of the title
  hover?: boolean;        // Whether to apply hover styles
  decoration?: boolean;   // Whether to apply decoration styles
  el?: "a" | "button" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // HTML element type
  href?: string;         // URL for 'a' element
  onClick?: () => void;  // Click event handler
}

// TitleXSmall component definition
export const TitleXSmall = ({
  label,
  decoration = false,
  hover = false,
  el = "h5",
  cls,
  ...props
}: TitleXSmallProps) => {
  // Dynamically determine the HTML element based on the 'el' prop
  const ElTag = `${el}` as keyof JSX.IntrinsicElements;

  // Render the TitleXSmall component
  return (
    <ElTag
      className={cn(`title-xsmall ${cls}`, {
        "title-xsmall--hover" : hover,
        "title-xsmall--decoration" : decoration,
      })}
      {...props}
    >
      {label}
    </ElTag>
  );
};

// Example usage:
// <TitleXSmall label="Hello World" decoration hover el="h1" cls="custom-class" />
