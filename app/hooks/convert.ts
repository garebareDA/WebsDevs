import { useState, useEffect } from "react";
const jsonToYaml = require("json-to-pretty-yaml");
const yamlToJson = require("js-yaml");

export const useConvertJsonYaml = (): {
  json: string;
  setJson: (json: string) => void;
  yaml: string;
  setYaml: (yaml: string) => void;
  yamlConvertError: boolean;
  jsonConvertError: boolean;
} => {
  const [json, setJson] = useState<string>("");
  const [yaml, setYaml] = useState<string>("");
  const [jsonConvertError, setJsonConvertError] = useState<boolean>(false);
  const [yamlConvertError, setYamlConvertError] = useState<boolean>(false);

  useEffect(() => {
    if (json === "") {
      setJsonConvertError(false);
      return;
    }

    try {
      const doc = JSON.parse(json);
      const data = jsonToYaml.stringify(doc);
      setYaml(data);
      setJsonConvertError(false);
    } catch (e) {
      setJsonConvertError(true);
    }
  }, [json]);

  useEffect(() => {
    if (yaml === "") {
      setYamlConvertError(false);
      return;
    }

    try {
      const doc = yamlToJson.load(yaml);
      const data = JSON.stringify(doc);
      setJson(data);
      setYamlConvertError(false);
    } catch (e) {
      setYamlConvertError(true);
    }
  }, [yaml]);

  return {
    json,
    setJson,
    yaml,
    setYaml,
    yamlConvertError,
    jsonConvertError,
  };
};
