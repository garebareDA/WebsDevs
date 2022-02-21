const beautify = require("xml-beautifier");
import {useState, useEffect} from "react";

export const useXmlFormatter = ():{
  xml: string,
  setXml: (xml: string) => void,
  formattedXml: string,
  setFormattedXml: (formattedXml: string) => void,
  error: boolean,
} => {
  const [xml, setXml] = useState("");
  const [formattedXml, setFormattedXml] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setFormattedXml(beautify(xml));
      setError(false);
    } catch (error) {
      setError(true);
    }
  }, [xml]);

  return {
    xml,
    setXml,
    formattedXml,
    setFormattedXml,
    error,
  };
};