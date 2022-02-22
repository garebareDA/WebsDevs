import React from "react";
import { Container, Spacer, Row, Button } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { GenerateInput } from "~/components/generate/generateInput";
import { useUuid } from "~/hooks/uuid";


export default function Index(): React.ReactElement {
  const { uuidV1, uuidV4, generateUuid } = useUuid();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="UUID"></Title>
        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="v1" value={uuidV1} />
        </Row>
        <Spacer y={2} />
        <Row justify="center">
          <GenerateInput name="v4" value={uuidV4} />
        </Row>

        <Spacer y={2} />
        <Row justify="center">
          <Button onClick={() => {
            generateUuid();
          }}>Generate</Button>
        </Row>
      </Container>
    </div>
  );
}