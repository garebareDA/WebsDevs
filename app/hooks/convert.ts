import { useState } from "react";
const jsonToYaml = require("json-to-pretty-yaml");
const yamlToJson = require("js-yaml");
import fmt2json from "format-to-json";

export const useConvertJsonYaml = (): {
  json: string;
  convertJsonToYaml: (json: string) => void;
  yaml: string;
  convertYamlToJson: (yaml: string) => void;
  yamlConvertError: boolean;
  jsonConvertError: boolean;
} => {
  const [json, setJson] = useState<string>("");
  const [yaml, setYaml] = useState<string>("");
  const [jsonConvertError, setJsonConvertError] = useState<boolean>(false);
  const [yamlConvertError, setYamlConvertError] = useState<boolean>(false);

  const convertJsonToYaml = (json: string): void => {
    setJson(json);
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
  };

  const convertYamlToJson = (yaml: string): void => {
    setYaml(yaml);
    if (yaml === "") {
      setYamlConvertError(false);
      return;
    }

    try {
      const doc = yamlToJson.load(yaml);
      const data = JSON.stringify(doc);
      fmt2json(data).then((formatted) => {
        if (typeof formatted !== "string") {
          setJson(formatted.result);
        }
        setYamlConvertError(false);
      });
    } catch (e) {
      setYamlConvertError(true);
    }
  };

  return {
    json,
    convertJsonToYaml,
    yaml,
    convertYamlToJson,
    yamlConvertError,
    jsonConvertError,
  };
};
