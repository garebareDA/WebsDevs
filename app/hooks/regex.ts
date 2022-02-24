import { useState, useEffect } from "react";

export type Regex = "match" | "search" | "split" | "test" | "exec";

export const useRegex = (): {
  input: string,
  setInput: (input: string) => void,
  regex: string,
  setRegex: (regex: string) => void,
  result: string,
  setRegexType: (regexType: Regex) => void,
} => {
  const [input, setInput] = useState<string>('');
  const [regex, setRegex] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [regexType, setRegexType] = useState<Regex>('match');

  useEffect(() => {
    const re = new RegExp(regex);
    switch (regexType) {
      case 'test': {
        setResult(re.test(input) ? 'true' : 'false');
        break;
      }

      case 'exec': {
        const exec = re.exec(input);
        if (exec !== null) {
          setResult(exec.toString());
        }
        break;
      }

      case 'search': {
        const result = input.search(regex);
        setResult(result.toString());
        break;
      }

      case 'split': {
        const result = input.split(regex);
        setResult(result.toString());
        break;
      }

      case 'match': {
        const result = input.match(regex);
        if (result !== null) {
          setResult(result.toString());
        }
      }
    }

  }, [input, regex, regexType]);

  return {
    input,
    setInput,
    regex,
    setRegex,
    result,
    setRegexType,
  };
};