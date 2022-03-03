import { useState } from "react";
import { v4, v1 } from "uuid";

export const useUuid = (): {
  uuidV1: string;
  uuidV4: string;
  generateUuid: (count:number) => void;
} => {
  const [uuidV1, setUuidV1] = useState<string>("");
  const [uuidV4, setUuidV4] = useState<string>("");

  const generateUuid = (count: number) => {
    let textV1 = "";
    let textV4 = "";
    for (let i = 0; i < count; i++) {
      textV1 = textV1 + "\n" + v1();
      textV4 = textV4 + "\n" + v4();
    }
    setUuidV1(textV1);
    setUuidV4(textV4);
  };
  return {
    uuidV1,
    uuidV4,
    generateUuid,
  };
};