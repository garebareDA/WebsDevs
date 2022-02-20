import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useBase64 } from "~/hooks/base64";
import { TextAreaEncodeDecode } from "~/components/decodeEncode/decodeEncode";

export default function Index(): React.ReactElement {
  const { decode, setDecode, encode, setEncode, decodeError, encodeError } = useBase64();

  return (
    <div>
      <Container gap={1} justify="center" css={{ maxWidth: "60%" }}>
        <Spacer y={1} />
        <Title title="Base Number"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeValue={decode}
          decodeSet={setDecode}
          decodeLabel="decode"
          decodeStatus={decodeError ? "error" : "default"}
          encodeValue={encode}
          encodeSet={setEncode}
          encodeLabel="encode"
          encodeStatus={encodeError ? "error" : "default"}
        />
      </Container>
    </div>
  );
}