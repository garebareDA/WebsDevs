import { useEffect, useState } from "react";

type Statistics = {
  characters: number;
  lines: number;
  bytes: number;
}


//連想配列にする
type Distribution = {
  text: string;
  count: number;
}

export const useTextInspector = ():{
  setText: (text:string) => void;
  statistics: Statistics;
  wordDistribution: Array<Distribution>
  characterDistribution: Array<Distribution>
} => {
  const [text, setText] = useState('');

  const [statistics, setStatistics] = useState<Statistics>({
    characters: 0,
    lines: 0,
    bytes: 0
  });
  const [wordDistribution, setWordDistribution] = useState<Array<Distribution>> ([]);
  const [characterDistribution, setCharacterDistribution] = useState<Array<Distribution>> ([]);

  const textStatistics = (text:string):Statistics => {
    const lines = text.split('\n').length;
    const characters = text.length;
    const bytes = new Blob([text]).size;

    return {
      characters,
      lines,
      bytes
    };
  };

  useEffect(() => {
    const statistics = textStatistics(text);
    console.log(statistics);
    setStatistics(statistics);

    const spaces = text.match(/\S+/g);
    const wordDistribution = Array.from(new Set(spaces)).map((word) => {
      
    });
  }, [text]);

  return {
    setText,
    statistics,
    wordDistribution,
    characterDistribution
  };
};