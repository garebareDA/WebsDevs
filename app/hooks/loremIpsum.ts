import { useState, useEffect } from "react";
import { loremIpsum } from "lorem-ipsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";

export const useLoremIpsum = (): {
  loremIpsum: string;
  generateLoremIpsum: () => void;
  count: number;
  setCount: (count: number) => void;
  setUnits: (unit: LoremUnit) => void;
} => {
  const [LI, setLI] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [units, setUnits] = useState<LoremUnit>("paragraphs");

  const generateLi = () => {
    const gen = loremIpsum(
      {
        units,
        count,
      }
    );
    setLI(gen);
  };

  useEffect(() => {
    generateLi();
  } , [count, units]);

  return{
    loremIpsum: LI,
    generateLoremIpsum: generateLi,
    count,
    setCount,
    setUnits,
  };
};