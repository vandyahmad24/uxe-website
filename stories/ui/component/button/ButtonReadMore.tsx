import { TextMedium } from "@/ui/text/text-medium/TextMedium";
import Link from "next/link";
import React from "react";

interface ButtonReadMoreProps {
  label: string;
  onClick?: () => void;
}

export const ButtonReadMore = ({
  label,
  onClick,
  ...props
}: ButtonReadMoreProps) => {
  return (
    <Link
      href="#read-more-hero"
      className="absolute w-full bottom-[40px] flex flex-col items-center justify-center gap-[16px] animate-[bounce_1.5s_ease-in-out_infinite] cursor-pointer"
      onClick={onClick}
      {...props}
    >
      <TextMedium label={label} cls="text-white" />
      <div className="rounded-full border border-white p-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M19.207 12.707L17.793 11.293L13.5 15.586V6H11.5V15.586L7.20697 11.293L5.79297 12.707L12.5 19.414L19.207 12.707Z"
            fill="white"
          />
        </svg>
      </div>
    </Link>
  );
};
