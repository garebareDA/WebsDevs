import { useState, useEffect } from "react";
const YAML = require("json-to-pretty-yaml");

export const useConvertJsonToYaml = (): {
  json: string;
  setJson: (json: string) => void;
  yaml: string;
  setYaml: (yaml: string) => void;
  yamlConvertError: boolean;
} => {
  const [json, setJson] = useState<string>("");
  const [yaml, setYaml] = useState<string>("");
  const [yamlConvertError, setYamlConvertError] = useState<boolean>(false);

  useEffect(() => {
    if (json === "") return;
    try {
      const jsn = JSON.parse(json);
      const data = YAML.stringify(jsn);
      setYaml(data);
    } catch (e) {
      setYamlConvertError(true);
    }
  }, [json]);

  return {
    json,
    setJson,
    yaml,
    setYaml,
    yamlConvertError,
  };
};
