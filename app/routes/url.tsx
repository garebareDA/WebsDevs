import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";
import { useURL } from "~/hooks/url";

export default function Index(): React.ReactElement {
  const { decode, setDecode, encode, setEncode, decodeError, encodeError } = useURL();
  return(
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="URL"></Title>
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