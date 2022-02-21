import { useState } from "react";
import { v4, v1 } from "uuid";

export const useUuid = ():{
  uuidV1: string;
  uuidV4: string;
  generateUuid: () => void;
} => {
  const [uuidV1, setUuidV1] = useState<string>("");
  const [uuidV4, setUuidV4] = useState<string>("");

  const generateUuid = () => {
    setUuidV1(v1());
    setUuidV4(v4());
  };
  return{
    uuidV1,
    uuidV4,
    generateUuid,
  };
};