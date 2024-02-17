import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { Dispatch, SetStateAction } from "react";

interface GATimeSpentProps {
  sectionName: string;
  startTime: number;
  setStartTime: Dispatch<SetStateAction<number>>;
}

export const GATimeSpent = ({sectionName, startTime, setStartTime} : GATimeSpentProps) : IntersectionObserver => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && startTime < 0) {
          setStartTime(new Date().getTime());
        }

        if (!entry.isIntersecting && startTime > 0) {
          const endTime = new Date().getTime();
          const timeSpent = Math.round((endTime - startTime) / 1000); // Convert milliseconds to seconds
          sendGTMEvent({
            event: "timeSpent",
            sectionName: sectionName,
            timeSpent: `${timeSpent}s`
          });
          setStartTime(-1); // Reset the start time
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  return observer
}

export const GAClick = (sectionName: string, componentName: string) => {
  sendGTMEvent({
    event: "clicked",
    sectionName: sectionName,
    componentName: componentName
  });
}