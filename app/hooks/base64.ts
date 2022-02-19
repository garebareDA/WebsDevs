import { useState, useEffect } from "react";

export const useBase64 = () => {
  const [decode, setDecode] = useState<string>("");
  const [encode, setEncode] = useState<string>("");
  const [decodeError, setDecodeError] = useState<boolean>(false);
  const [encodeError, setEncodeError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const result = atob(decode);
      setEncode(result);
      setDecodeError(false);
    } catch (e) {
      setDecodeError(true);
    }
  }, [decode]);

  useEffect(() => {
    try {
      const result = btoa(encode);
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