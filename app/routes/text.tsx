import React from "react";
import { Container, Spacer, Textarea, Row } from "@nextui-org/react";

import { Title } from "~/components/util/title";
import { useTextInspector } from "~/hooks/textInscpector";

export default function Index(): React.ReactElement {
  const { statistics, wordDistribution, characterDistribution, setText } = useTextInspector();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Text Inspector"></Title>
        <Spacer y={2} />
        <Row justify="center">
          <Textarea labelPlaceholder="text" onChange={(e) => {
            setText(e.target.value);
          }}></Textarea>
        </Row>
      </Container>
    </div>
  );
}