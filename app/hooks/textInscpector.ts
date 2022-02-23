import { useEffect, useState } from "react";

type Statistics = {
  characters: number;
  lines: number;
  bytes: number;
}

type Distribution = { [key: string]: number }

export const useTextInspector = (): {
  setText: (text: string) => void;
  statistics: Statistics;
  wordsText: string;
  charactersText: string;
} => {
  const [text, setText] = useState('');

  const [statistics, setStatistics] = useState<Statistics>({
    characters: 0,
    lines: 0,
    bytes: 0
  });
  const [wordDistribution, setWordDistribution] = useState<Distribution>({});
  const [characterDistribution, setCharacterDistribution] = useState<Distribution>({});
  const [wordsText, setWordsText] = useState('');
  const [charactersText, setCharactersText] = useState('');

  const textStatistics = (text: string): Statistics => {
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
    setStatistics(statistics);

    const spaces = text.match(/\S+/g);
    const words: { [key: string]: number } = {};
    spaces?.map(word => {
      words[word] = (words[word] || 0) + 1;
    });
    setWordDistribution(words);

    const characters: { [key: string]: number } = {};
    text.split('').map(character => {
      characters[character] = (characters[character] || 0) + 1;
    });
    setCharacterDistribution(characters);
  }, [text]);

  useEffect(() => {
    let text = '';
    Object.keys(wordDistribution).map(word => {
      if (word !== '\n' && word !== ' ') {
        text += `${word}:${wordDistribution[word]}\n`;
      }
    });
    setCharactersText(text);
  }, [characterDistribution]);

  useEffect(() => {
    let text = '';
    Object.keys(characterDistribution).map(character => {
      if (character !== '\n' && character !== ' ') {
        text += `${character}:${characterDistribution[character]}\n`;
      }
    });
    setWordsText(text);
  }, [wordDistribution]);

  return {
    setText,
    statistics,
    wordsText,
    charactersText,
  };
};