import React from 'react';
import cn from 'classnames';

// Define the properties for the TitleXXSmall component
interface TitleXXSmallProps {
  cls?: string;          // Additional classes for styling
  label: string;         // Text content of the title
  hover?: boolean;        // Whether to apply hover styles
  decoration?: boolean;   // Whether to apply decoration styles
  el?: "a" | "button" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // HTML element type
  href?: string;         // URL for 'a' element
  onClick?: () => void;  // Click event handler
  style?: any;
}

// TitleXXSmall component definition
export const TitleXXSmall = ({
  label,
  decoration = false,
  hover = false,
  el = "h6",
  cls,
  ...props
}: TitleXXSmallProps) => {
  // Dynamically determine the HTML element based on the 'el' prop
  const ElTag = `${el}` as keyof JSX.IntrinsicElements;

  // Render the TitleXXSmall component
  return (
    <ElTag
      className={cn(`title-xxsmall ${cls}`, {
        "title-xxsmall--hover" : hover,
        "title-xxsmall--decoration" : decoration,
      })}
      {...props}
    >
      {label}
    </ElTag>
  );
};

// Example usage:
// <TitleXXSmall label="Hello World" decoration hover el="h1" cls="custom-class" />
