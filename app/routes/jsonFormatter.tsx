import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode/decodeEncode";
import { useJsonFormatter } from "~/hooks/jsonFormatter";

export default function Index(): React.ReactElement {
  const {json, setJson, formatted, setFormatted, error} = useJsonFormatter();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="JSON Formatter"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setJson}
          decodeValue={json}
          decodeLabel="json"
          decodeStatus={error ? "error" : "default"}
          encodeSet={setFormatted}
          encodeValue={formatted}
          encodeLabel="formatted(read only)"
          encodeStatus={"default"}
          readonly={true}
        />
      </Container>
    </div>
  );
}