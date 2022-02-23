import React, { useState } from "react";
import { Container, Spacer, Textarea, Grid, Text, Row, Button, Col } from "@nextui-org/react";

import { Title } from "~/components/util/title";
import { useTextInspector } from "~/hooks/textInscpector";
import { useCaseConvert } from "~/hooks/caseConvet";

export default function Index(): React.ReactElement {
  const { statistics, wordsText, charactersText, setText } = useTextInspector();
  const [inpuText, setInputText] = useState("");

  return (
    <div>
      <Container gap={1}>
        <Spacer y={1} />
        <Title title="Text Inspector"></Title>
        <Grid.Container gap={3} justify="center">
          <Grid xs={12}>
            <Button.Group>
              <Button>Original</Button>
              <Button></Button>
            </Button.Group>
          </Grid>

          <Grid xs={8}>
            <Textarea rows={30} labelPlaceholder="text" width="100%" onChange={(e) => {
              setText(e.target.value);
            }} />
          </Grid>

          <Grid xs={4} >
            <Container gap={0}>
              <Text>line:{statistics.lines}</Text>
              <Text>characters:{statistics.characters}</Text>
              <Text>bytes:{statistics.bytes}</Text>
              <Spacer/>
              <Textarea value={wordsText} width="100%" readOnly rows={10}></Textarea>
              <Spacer/>
              <Textarea value={charactersText} width="100%" readOnly rows={10}></Textarea>
            </Container>
          </Grid>
        </Grid.Container>
      </Container>
    </div >
  );
}