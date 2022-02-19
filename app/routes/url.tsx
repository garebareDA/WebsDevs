import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode/decodeEncode";
import { useURL } from "~/hooks/url";

export default function Index(): React.ReactElement {
  const { decode, setDecode, encode, setEncode, decodeError, encodeError } = useURL();
  return(
    <div>
      <Container gap={1} justify="center" css={{maxWidth:"60%"}}>
        <Spacer y={1} />
        <Title title="URL"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setDecode}
          decodeValue={decode}
          decodeLabel="decode"
          decodeStatus={decodeError ? "error" : "default"}
          encodeSet={setEncode}
          encodeValue={encode}
          encodeLabel="encode"
          encodeStatus={encodeError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}