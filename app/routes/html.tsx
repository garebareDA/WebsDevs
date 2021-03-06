import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";
import { Title } from "~/components/title";
import { useHtml } from "~/hooks/html";

export default function Index(): React.ReactElement {
  const { decode, setDecode, encode, setEncode, decodeError, encodeError } =
    useHtml();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="HTML"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setDecode}
          decodeValue={decode}
          decodeLabel="decoded"
          decodeStatus={decodeError ? "error" : "default"}
          encodeSet={setEncode}
          encodeValue={encode}
          encodeLabel="encoded"
          encodeStatus={encodeError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}
