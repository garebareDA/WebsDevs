import { useState, useEffect } from "react";

export type Regex = "match" | "search" | "split" | "test" | "exec";

export const useRegex = (): {
  input: string,
  setInput: (input: string) => void,
  regex: string,
  setRegex: (regex: string) => void,
  result: string,
  setRegexType: (regexType: Regex) => void,
  isError: boolean,
} => {
  const [input, setInput] = useState<string>('');
  const [regex, setRegex] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [regexType, setRegexType] = useState<Regex>('match');

  useEffect(() => {
    try {
      const re = new RegExp(regex);
      setIsError(false);
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
    } catch (e) {
      setIsError(true);
    }
  }, [input, regex, regexType]);

  return {
    input,
    setInput,
    regex,
    setRegex,
    result,
    setRegexType,
    isError,
  };
};