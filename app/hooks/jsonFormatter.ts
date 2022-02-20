import { useState, useEffect } from "react";
import fmt2json from "format-to-json";

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
      fmt2json(json).then((formatted) => {
        if(typeof formatted !== "string") {
            setFormatted(formatted.result);
          }
        setError(false);
      });
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