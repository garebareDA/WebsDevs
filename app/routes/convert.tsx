import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useConvertJsonYaml } from "~/hooks/convert";
import { TextAreaEncodeDecode } from "~/components/decodeEncode/decodeEncode";
import React, { useEffect } from "react";

export default function Index(): React.ReactElement {
  const { json, setJson, yaml, setYaml, jsonConvertError, yamlConvertError } = useConvertJsonYaml();

  return (
    <div>
      <Container gap={1} justify="center" css={{ maxWidth: "60%" }}>
        <Spacer y={1} />
        <Title title="json<=>yaml"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          encodeSet={setJson}
          encodeValue={json}
          encodeLabel="json"
          encodeStatus={jsonConvertError ? "error" : "default"}
          decodeSet={setYaml}
          decodeValue={yaml}
          decodeLabel="yaml"
          decodeStatus={yamlConvertError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}
