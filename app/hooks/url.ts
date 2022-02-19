import { useState, useEffect } from "react";
const HTML = require("html-encoder-decoder");

export const useURL = (): {
  decode: string;
  setDecode: (decode: string) => void;
  encode: string;
  setEncode: (encode: string) => void;
  decodeError: boolean;
  encodeError: boolean;
} => {
  const [decode, setDecode] = useState<string>("");
  const [encode, setEncode] = useState<string>("");
  const [decodeError, setDecodeError] = useState<boolean>(false);
  const [encodeError, setEncodeError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const result = HTML.encode(decode);
      setEncode(result);
      setDecodeError(false);
    } catch (e) {
      setDecodeError(true);
    }
  }, [decode]);

  useEffect(() => {
    try {
      const result = HTML.decode(encode);
      setDecode(result);
      setEncodeError(false);
    } catch (e) {
      setEncodeError(true);
    }
  }, [encode]);

  return {
    decode,
    setDecode,
    encode,
    setEncode,
    decodeError,
    encodeError,
  };
};
