import React from "react";
import { Container, Spacer, Row, Button, Input, Text } from "@nextui-org/react";
import { Title } from "~/components/title";
import { GenerateInput } from "~/components/generateInput";
import { useUuid } from "~/hooks/uuid";


export default function Index(): React.ReactElement {
  const { uuidV1, uuidV4, generateUuid } = useUuid();
  const [count, setCount] = React.useState<number>(1);
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
        <Row justify="center" align="flex-start">
          <Button onClick={() => {
            generateUuid(count);
          }}>Generate</Button>
          <Input labelLeft="X" type="number" min={1} value={count.toString()} onChange={(e) => {
            const value = parseInt(e.target.value);
            if (
              ((value >= 2 && value <= 36) || Number.isNaN(value)) &&
              value !== count
            ) {
              setCount(value);
            }
          }}></Input>
        </Row>
      </Container>
    </div>
  );
}