import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import fmt2json from "format-to-json";

export const useJwt = (): {
  decode: string,
  setDecode: (decode: string) => void,
  encode: string,
  setEncode: (encode: string) => void,
  decodeError: boolean,
} => {
  const [decode, setDecode] = useState<string>("");
  const [encode, setEncode] = useState<string>("");
  const [decodeError, setDecodeError] = useState<boolean>(false);

  useEffect(() => {
    if (decode === "")
    {
      setDecodeError(false);
      return;
    }

    try {
      const result = JSON.stringify(jwtDecode(decode));
      const header = JSON.stringify(jwtDecode(decode, { header: true }));
      fmt2json(result).then((formatted) => {
        if (typeof formatted !== "string") {
          setEncode("header:\n" + header + "\n\n" + "payload:\n" + formatted.result);
        }
        setDecodeError(false);
      });
    } catch (e) {
      setDecodeError(true);
    }
  }, [decode]);

  return {
    decode,
    setDecode,
    encode,
    setEncode,
    decodeError,
  };
};