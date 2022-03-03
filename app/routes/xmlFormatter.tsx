import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";
import { useXmlFormatter } from "~/hooks/xmlFormatter";

export default function Index(): React.ReactElement {
  const { xml, setXml, formattedXml, setFormattedXml, error } = useXmlFormatter();
  return(
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="XML Formatter"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setXml}
          decodeValue={xml}
          decodeLabel="XML"
          decodeStatus={error ? "error" : "default"}
          encodeSet={setFormattedXml}
          encodeValue={formattedXml}
          encodeLabel="Formatted(readonly)"
          encodeStatus={"default"}
          readonly
        />
      </Container>
    </div>
  );
}