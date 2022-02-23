import { useState, useEffect } from "react";
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

type Cases = 'sentence' | "camel" | "pascal" | "snake" | "constant" | "param" | "title" | "lower" | "upper";

export const useCaseConvert = (): {
  originText:string,
  convertText:string,
  setOriginText: (text: string) => void,
  convert: (cases: Cases) => void,
} => {
  const [originText, setOriginText] = useState("");
  const [convertText, setConvertText] = useState("");

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
      default:
        break;
    }
  };

  return {
    originText,
    convertText,
    setOriginText,
    convert,
  };
};