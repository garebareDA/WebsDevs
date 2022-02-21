import React from "react";
import { Container, Spacer} from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode/decodeEncode";

import { useJwt } from "~/hooks/jwt";

export default function Index(): React.ReactElement {
  const {decode, setDecode, encode, setEncode, decodeError} = useJwt();
  return(
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="JWT decoder"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setDecode}
          decodeValue={decode}
          decodeLabel="JWT"
          decodeStatus={decodeError ? "error" : "default"}
          encodeSet={setEncode}
          encodeValue={encode}
          encodeLabel="encoded(read only)"
          encodeStatus={"default"}
          readonly={true}
        />
      </Container>
    </div>
  );
}