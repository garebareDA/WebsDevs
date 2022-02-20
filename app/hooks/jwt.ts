import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

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
    if (decode === "") return;
    try {
      const result = jwtDecode(decode);
      console.log(result);
      setEncode(JSON.stringify(result));
      setDecodeError(false);
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