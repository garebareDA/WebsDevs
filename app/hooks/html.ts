import { useState, useEffect } from "react";
const HTMLDecoderEncoder = require("html-encoder-decoder");

export const useHtml = (): {
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
      const result = HTMLDecoderEncoder.encode(decode);
      setEncode(result);
      setDecodeError(false);
    } catch (e) {
      setDecodeError(true);
    }
  }, [decode]);

  useEffect(() => {
    try {
      const result = HTMLDecoderEncoder.decode(encode);
      setDecode(result);
      setEncodeError(false);
      console.log(result);
    } catch (e) {
      setDecodeError(true);
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
