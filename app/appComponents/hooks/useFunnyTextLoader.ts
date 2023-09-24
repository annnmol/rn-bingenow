import React, { useEffect, useState } from "react";

const funnyTexts = [
  "Loading...",
  "Hold on tight!",
  "Getting things ready...",
  "Tick-tock...",
  "Almost there!",
  "Hocus pocus!",
  "Abracadabra!",
  "Patience is a virtue!",
  "Keep calm and wait!",
  "Expecto patronum!",
];

const shuffleArray = (array: any[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const useFunnyTextLoader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === funnyTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const shuffledTexts = shuffleArray(funnyTexts);

  return shuffledTexts?.[currentTextIndex];
};

export default useFunnyTextLoader;
