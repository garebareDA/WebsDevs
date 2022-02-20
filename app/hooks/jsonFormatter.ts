import { useState, useEffect } from "react";

export const useJsonFormatter = (): {
  json: string,
  setJson: (json: string) => void,
  formatted: string,
  setFormatted: (format: string) => void,
  error: boolean,
} => {
  const [json, setJson] = useState<string>("");
  const [formatted, setFormatted] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (json === "") {
      setError(false);
      return;
    }
    try {
      const result = JSON.parse(json);
      const format = beautify(result, [], 2, 80);
      console.log(format);
      setFormatted(format);
      setError(false);
    } catch (e) {
      setError(true);
    }
  }, [json]);

  return {
    json,
    setJson,
    formatted,
    setFormatted,
    error,
  };
};