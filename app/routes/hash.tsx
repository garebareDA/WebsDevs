import React from "react";
import { Container, Spacer, Input, Row } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useHash } from "~/hooks/hash";
import { GenerateInput } from "~/components/generate/generateInput";

export default function Index(): React.ReactElement {
  const { text, setText, md5Hash, sha1Hash, sha256Hash, sha512Hash } = useHash();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Hash"></Title>
        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" labelPlaceholder="text" value={text} onChange={(e) => {
            setText(e.target.value);
          }}></Input>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="md5" value={md5Hash} />
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="sha1" value={sha1Hash} />
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="sha256" value={sha256Hash} />
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="sha512" value={sha512Hash} />
        </Row>
      </Container>
    </div>
  );
};