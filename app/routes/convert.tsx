import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/title";
import { useConvertJsonYaml } from "~/hooks/convert";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";
import React from "react";

export default function Index(): React.ReactElement {
  const { json, convertJsonToYaml, yaml, convertYamlToJson, jsonConvertError, yamlConvertError } =
    useConvertJsonYaml();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="json<=>yaml"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={convertJsonToYaml}
          decodeValue={json}
          decodeLabel="json"
          decodeStatus={jsonConvertError ? "error" : "default"}
          encodeSet={convertYamlToJson}
          encodeValue={yaml}
          encodeLabel="yaml"
          encodeStatus={yamlConvertError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}
