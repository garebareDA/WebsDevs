import { useState } from "react";

export const useTextDiff = ():{
  oldText:string,
  newText:string,
  setOldText: (text: string) => void,
  setNewText: (text: string) => void,
} => {
  const [oldText, setOldText] = useState<string>("");
  const [newText, setNewText] = useState<string>("");


  return {
    oldText,
    setOldText,
    newText,
    setNewText,
  };
};