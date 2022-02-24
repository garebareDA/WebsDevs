import {useState, useEffect} from "react";

export const useRegex = ():{
  input:string,
  setInput:(input:string) => void,
  regex:string,
  setRegex:(regex:string) => void,
  result:string,
} => {
  const [input, setInput] = useState<string>('');
  const [regex, setRegex] = useState<string>('');
  const [result, setResult] = useState<string>('');

  

  return;
}