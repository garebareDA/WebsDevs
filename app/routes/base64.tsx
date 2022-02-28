import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/title";
import { useBase64 } from "~/hooks/base64";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";

export default function Index(): React.ReactElement {
  const { decode, setDecode, encode, setEncode, decodeError, encodeError } = useBase64();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Base64"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeValue={decode}
          decodeSet={setDecode}
          decodeLabel="decoded"
          decodeStatus={decodeError ? "error" : "default"}
          encodeValue={encode}
          encodeSet={setEncode}
          encodeLabel="encoded"
          encodeStatus={encodeError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}