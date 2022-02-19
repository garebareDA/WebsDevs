import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/util/title";

export default function Index(): React.ReactElement {
    
    return (
      <div>
          <Container gap={1} justify="center" css={{maxWidth: "60%"}}>
            <Spacer y={1} />
            <Title title="HTML"></Title>
            <Spacer y={2} />
          </Container>
      </div>
  );
}