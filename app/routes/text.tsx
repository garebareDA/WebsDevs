import React from "react";
import { Container, Spacer, Textarea, Row, Grid, Text, Col } from "@nextui-org/react";

import { Title } from "~/components/util/title";
import { useTextInspector } from "~/hooks/textInscpector";

export default function Index(): React.ReactElement {
  const { statistics, wordsText, charactersText, setText } = useTextInspector();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Text Inspector"></Title>
        <Spacer y={2} />
        <Grid.Container gap={1} justify="center">
          <Grid alignItems="flex-start" xs={8}>
            <Textarea maxRows={100} rows={30} labelPlaceholder="text" width="100%" onChange={(e) => {
              setText(e.target.value);
            }} />
          </Grid>

          <Grid>
            <Text>line:{statistics.lines}</Text>
            <Text>characters:{statistics.characters}</Text>
            <Text>bytes:{statistics.bytes}</Text>
            <Spacer />
            <Textarea value={wordsText} readOnly rows={10}></Textarea>
            <Spacer />
            <Textarea value={charactersText} readOnly rows={10}></Textarea>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}