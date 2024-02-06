import React from "react";
import { TextMedium } from "../../text/text-medium/TextMedium";

interface LabelLargeProps {
  label: string;
  style?: any;
}

export const LabelLarge = ({ label, ...props }: LabelLargeProps) => {
  return (
    <div className="label-large" {...props}>
      <div className="label-large-wrapper">
        <div className="label-large--icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            viewBox="0 0 10 10"
            fill="none"
          >
            <g clipPath="url(#clip0_710_10636)">
              <path
                d="M5.00065 0.183594L9.16732 1.64193V5.00026C9.16732 6.71984 8.1119 7.92193 7.12732 8.66818C6.53327 9.11443 5.88151 9.47816 5.18982 9.74943C5.17776 9.75409 5.16568 9.75867 5.15357 9.76318L5.14315 9.76693L5.14023 9.76776L5.13898 9.76818C5.13857 9.76818 5.13815 9.76818 5.00065 9.37526L4.86273 9.76859L4.86107 9.76776L4.85815 9.76693L4.84773 9.76276C4.79208 9.74221 4.7368 9.72067 4.6819 9.69818C4.03794 9.43263 3.4303 9.08639 2.87357 8.66776C1.89023 7.92234 0.833984 6.72026 0.833984 5.00068V1.64193L5.00065 0.183594ZM5.00065 9.37526L4.86273 9.76859L5.00065 9.81693L5.13857 9.76859L5.00065 9.37526ZM5.00065 8.92859L5.0044 8.92693C5.58102 8.68881 6.1252 8.37871 6.62398 8.00401C7.51482 7.32943 8.33398 6.34318 8.33398 5.00026V2.23359L5.00065 1.06693L1.66732 2.23359V5.00026C1.66732 6.34318 2.48648 7.32859 3.37732 8.00443C3.87719 8.37985 4.42266 8.69038 5.00065 8.92859ZM7.53065 3.47651L4.5844 6.42276L2.81648 4.65526L3.40607 4.06568L4.58398 5.24443L6.94107 2.88734L7.53065 3.47651Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_710_10636">
                <rect width="10" height="10" fill="currentColor" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <TextMedium label={label} decoration />
      </div>
      <style jsx>{`
        .label-large {
          background-image: linear-gradient(
            145deg,
            rgba(190, 190, 190, 0.16) 23.23%,
            rgba(190, 190, 190, 0) 114.49%
          );
          backdrop-filter: blur(6px);
          border-radius: 9999px;
          padding: 10px;
        }

        .label-large-wrapper {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .label-large--icon {
          background-color: #ffffffbf;
          padding: 5px;
          border-radius: 9999px;
          color: black;
        }
      `}</style>
    </div>
  );
};
