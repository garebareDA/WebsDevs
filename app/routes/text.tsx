import React, { useEffect } from "react";
import { Container, Spacer, Textarea, Grid, Text, Radio } from "@nextui-org/react";

import { Title } from "~/components/title";
import { useTextInspector } from "~/hooks/textInscpector";
import { useCaseConvert } from "~/hooks/caseConvet";
import type { Cases } from "~/hooks/caseConvet";

export default function Index(): React.ReactElement {
  const { statistics, wordsText, charactersText, setText } = useTextInspector();
  const {setOriginText, convertText, setCase } = useCaseConvert();
  useEffect(() => {
    setText(convertText);
  }, [convertText]);
  return (
    <div>
      <Container gap={1}>
        <Spacer y={1} />
        <Title title="Text Inspector & Case Converter"></Title>
        <Grid.Container gap={3} justify="center">
          <Grid xs={12}>
            <Radio.Group value="original" size={"sm"} row onChange={(e) => {
              if (typeof e === "string")
                setCase(e as Cases);
            }}>
              <Grid.Container>
                <Grid>
                  <Radio value="original">original</Radio>
                </Grid>
                <Grid>
                  <Radio value="camel">camel</Radio>
                </Grid>
                <Grid>
                  <Radio value="pascal">pascal</Radio>
                </Grid>
                <Grid>
                  <Radio value="snake">snake</Radio>
                </Grid>
                <Grid>
                  <Radio value="constant">constant</Radio>
                </Grid>
                <Grid>
                  <Radio value="param">param</Radio>
                </Grid>
                <Grid>
                  <Radio value="title">title</Radio>
                </Grid>
                <Grid>
                  <Radio value="lower">lower</Radio>
                </Grid>
                <Grid>
                  <Radio value="upper">upper</Radio>
                </Grid>
              </Grid.Container>
            </Radio.Group>
          </Grid>

          <Grid xs={8}>
            <Textarea rows={30} labelPlaceholder="text" width="100%" value={convertText} onChange={(e) => {
              setOriginText(e.target.value);
            }} />
          </Grid>

          <Grid xs={4} >
            <Container gap={0}>
              <Text>line:{statistics.lines}</Text>
              <Text>characters:{statistics.characters}</Text>
              <Text>bytes:{statistics.bytes}</Text>
              <Spacer />
              <Textarea value={wordsText} width="100%" readOnly rows={10} labelPlaceholder="wards"></Textarea>
              <Spacer />
              <Textarea value={charactersText} width="100%" readOnly rows={10} labelPlaceholder="characters"></Textarea>
            </Container>
          </Grid>
        </Grid.Container>
      </Container>
    </div >
  );
}