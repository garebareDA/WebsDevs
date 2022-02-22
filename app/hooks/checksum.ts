import { useEffect, useState } from "react";
import md5 from "crypto-js/md5";
import sha1 from "crypto-js/sha1";
import sha256 from "crypto-js/sha256";
import sha512 from "crypto-js/sha512";

export type CheckSumType = "md5" | "sha1" | "sha256" | "sha512";

export const useChecksum = (): {
  setCheckSumType: (checkSum: CheckSumType) => void,
  setFirstFile: (text: string) => void,
  setSecondFile: (text: string) => void,
  firstOutput: string,
  secondOutput: string,
  checkSum: boolean,
} => {
  const [checksumType, setCheckSumType] = useState<CheckSumType>("md5");
  const [firstFile, setFirstFile] = useState<string>("");
  const [secondFile, setSecondFile] = useState<string>("");
  const [firstOutput, setFirstOutput] = useState<string>("");
  const [secondOutput, setSecondOutput] = useState<string>("");
  const [checkSum, setCheckSum] = useState<boolean>(true);

  const hash = (file: string): string => {
    switch (checksumType) {
      case "md5":
        return md5(file).toString();
      case "sha1":
        return sha1(file).toString();
      case "sha256":
        return sha256(file).toString();
      case "sha512":
        return sha512(file).toString();
    }
  };

  useEffect(() => {
    if (firstFile !== "")
      setFirstOutput(hash(firstFile));
  }, [checksumType, firstFile]);

  useEffect(() => {
    if (secondFile !== "")
      setSecondOutput(hash(secondFile));
      console.log(hash(secondFile));
  }, [checksumType, secondFile]);

  useEffect(() => {
    if (firstOutput !== "" && secondOutput !== "") {
      console.log([firstOutput, secondOutput]);
      setCheckSum(firstOutput === secondOutput);
    }
  }, [firstOutput, secondOutput]);

  return {
    setCheckSumType,
    setFirstFile,
    setSecondFile,
    firstOutput,
    secondOutput,
    checkSum,
  };
};