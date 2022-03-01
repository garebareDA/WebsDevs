import React, { useEffect } from "react";
import { Container, Spacer, Textarea, Grid, Text, Radio } from "@nextui-org/react";
import { GridRadioGroup } from "~/components/radioGroup";
import { Title } from "~/components/title";
import { useTextInspector } from "~/hooks/textInscpector";
import { useCaseConvert } from "~/hooks/caseConvet";
import type { Cases } from "~/hooks/caseConvet";

export default function Index(): React.ReactElement {
  const value = [
    "original",
    "camel",
    "pascal",
    "snake",
    "constant",
    "param",
    "title",
    "lower",
    "upper",
  ];

  const { statistics, wordsText, charactersText, setText } = useTextInspector();
  const { setOriginText, convertText, setCase } = useCaseConvert();

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
            <GridRadioGroup values={value} size="sm" row onChange={(e) => {
              if(typeof e === "string") {
                setCase(e as Cases);
              }
            }} />
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