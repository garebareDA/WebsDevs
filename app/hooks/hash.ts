import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";

import { useState, useEffect } from "react";

export const useHash = ():{
  text: string,
  setText: (text: string) => void,
  md5Hash: string,
  sha1Hash: string,
  sha256Hash: string,
  sha512Hash: string,
} => {
  const [text, setText] = useState("");
  const [md5Hash, setMd5Hash] = useState("");
  const [sha1Hash, setSha1Hash] = useState("");
  const [sha256Hash, setSha256Hash] = useState("");
  const [sha512Hash, setSha512Hash] = useState("");

  useEffect(() => {
    setMd5Hash(md5(text).toString());
    setSha1Hash(sha1(text).toString());
    setSha256Hash(sha256(text).toString());
    setSha512Hash(sha512(text).toString());
  }, [text]);

  return {
    text,
    setText,
    md5Hash,
    sha1Hash,
    sha256Hash,
    sha512Hash,
  };
};