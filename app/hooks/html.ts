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
    if (decode === "") {
      setDecodeError(false);
      return;
    }

    try {
      const result = HTMLDecoderEncoder.encode(decode);
      setEncode(result);
      console.log(result);
    } catch (e) {
      setDecodeError(true);
    }
  }, [decode]);

  useEffect(() => {
    if (encode === "") {
      setEncodeError(false);
      return;
    }

    try {
      const result = HTMLDecoderEncoder.decode(encode);
      setDecode(result);
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
