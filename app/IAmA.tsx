"use client";

import React, { useEffect, useState } from "react";

const words = ["a Developer", "a Designer", "an Architect", "a Planner"];
const maxWaitTime = 15;

type Props = {
  className?: string;
};

const IAmA: React.FC<Props> = ({ className }) => {
  const [loc, setLoc] = useState(0);
  const [currentWordLoc, setCurrentWordLoc] = useState(0);
  const [visibleWord, setVisibleWord] = useState<string>();
  const [forwards, setForwards] = useState(true);
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let newWaitTime = waitTime;
      let newForwards = forwards;
      let newLoc = loc;
      let newWordLoc = currentWordLoc;
      if (forwards && loc > words[currentWordLoc].length) {
        newWaitTime++;
        if (newWaitTime === maxWaitTime) {
          newForwards = false;
          newWaitTime = 0;
        }
      } else if (loc === 0) {
        newWordLoc++;
        if (newWordLoc >= words.length) {
          newWordLoc = 0;
        }
        newForwards = true;
      }

      if (newWaitTime === 0) {
        if (newForwards) newLoc++;
        else newLoc--;
      }
      setForwards(newForwards);
      setWaitTime(newWaitTime);
      setLoc(newLoc);
      setCurrentWordLoc(newWordLoc);
      setVisibleWord(words[newWordLoc].substring(0, newLoc));
    }, 70);

    return () => clearInterval(interval);
  }, [loc, currentWordLoc, forwards, waitTime]);

  return (
    <span className={`font-mono text-xl ${className}`}>
      I am <span className="font-semibold text-[#db9b09]">{visibleWord}</span>
    </span>
  );
};

export default IAmA;
