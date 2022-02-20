import { useState, useEffect } from "react";
import * as zip from "@zip.js/zip.js";

export const useGzip = (): {
  decode: string,
  setDecode: (decode: string) => void,
  encode: string,
  setEncode: (encode: string) => void,
  decodeError: boolean,
  encodeError: boolean,
} => {
  const [decode, setDecode] = useState<string>("");
  const [encode, setEncode] = useState<string>("");
  const [decodeError, setDecodeError] = useState<boolean>(false);
  const [encodeError, setEncodeError] = useState<boolean>(false);
  const [isDecode, setIsDecode] = useState<boolean>(false);
  const [isEncode, setIsEncode] = useState<boolean>(false);

  useEffect(() => {
    if (decode === "") return;
    if (isEncode) return;
    const inputBlob = new Blob(
      [decode],
      { type: "text/plain" });
    const zipWriter = new zip.ZipWriter(new zip.Data64URIWriter("application/zip"));
    zipWriter.add("test.txt", new zip.BlobReader(inputBlob)).then(() => {
      setIsDecode(true);
      zipWriter.close().then((text) => {
        if(isEncode) return;
        setEncode(text);
        setEncodeError(false);
        setIsDecode(false);
      }).catch(() => {
        setEncodeError(true);
        setIsDecode(false);
      });
    });
  }, [decode]);

  useEffect(() => {
    if (encode === "") return;
    if (isDecode) return;
    const zipReader = new zip.ZipReader(new zip.Data64URIReader(encode));
    zipReader.getEntries().then((entries) => {
      if (entries.length && entries[0].getData !== undefined) {
        setIsEncode(true);
        entries[0].getData(new zip.TextWriter()).then((text) => {
          if (isDecode) return;
          setDecode(text);
          setDecodeError(false);
          setIsEncode(false);
        }).catch(() => {
          setDecodeError(true);
          setIsEncode(false);
        });
      }
    });
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