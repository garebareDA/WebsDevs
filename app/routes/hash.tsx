import React from "react";
import { Container, Spacer, Input, Row } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useHash } from "~/hooks/hash";

export default function Index(): React.ReactElement {
  const { text, setText, md5Hash, sha1Hash, sha256Hash, sha512Hash } = useHash();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Hash"></Title>
        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" value={text} onChange={(e) => {
            setText(e.target.value);
          }}></Input>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" readOnly value={md5Hash}></Input>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" readOnly value={sha1Hash}></Input>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" readOnly value={sha256Hash}></Input>
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Input width="100%" readOnly value={sha512Hash}></Input>
        </Row>

      </Container>
    </div>
  );
};