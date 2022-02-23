import { useEffect, useState} from "react";
import {
  sentenceCase,
  camelCase,
  pascalCase,
  snakeCase,
  constantCase,
  paramCase,
} from "change-case";
import {titleCase} from "title-case";
import { lowerCase } from "lower-case";
import { upperCase } from "upper-case";

export type Cases = 'sentence' | "camel" | "pascal" | "snake" | "constant" | "param" | "title" | "lower" | "upper" | "original";

export const useCaseConvert = (): {
  originText:string,
  convertText:string,
  setOriginText: (text: string) => void,
  setCase: (cases: Cases) => void,
} => {
  const [originText, setOriginText] = useState("");
  const [convertText, setConvertText] = useState("");
  const [cases, setCase] = useState<Cases>("original");

  useEffect(() => {
    convert(cases);
  }, [cases, originText]);

  const convert = (caseType: Cases) => {
    switch (caseType) {
      case "sentence":
        setConvertText(sentenceCase(originText));
        break;
      case "camel":
        setConvertText(camelCase(originText));
        break;
      case "pascal":
        setConvertText(pascalCase(originText));
        break;
      case "snake":
        setConvertText(snakeCase(originText));
        break;
      case "constant":
        setConvertText(constantCase(originText));
        break;
      case "param":
        setConvertText(paramCase(originText));
        break;
      case "title":
        setConvertText(titleCase(originText));
        break;
      case "lower":
        setConvertText(lowerCase(originText));
        break;
      case "upper":
        setConvertText(upperCase(originText));
        break;
        case "original":
        setConvertText(originText);
        break;
      default:
        break;
    }
  };

  return {
    originText,
    convertText,
    setOriginText,
    setCase,
  };
};