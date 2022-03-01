import React, { useEffect } from "react";
import { Container, Spacer, Row, Textarea, Text, Input } from "@nextui-org/react";
import { Title } from "~/components/title";
import { GridRadioGroup } from "~/components/radioGroup";
import { useLoremIpsum } from "~/hooks/loremIpsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";

export default function Index(): React.ReactElement {
  const value = [
    "paragraphs",
    "sentences",
    "words",
  ];

  const { loremIpsum, generateLoremIpsum, setCount, count, setUnits } = useLoremIpsum();
  useEffect(() => {
    generateLoremIpsum();
  }, []);

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Lorem Ipsum Generator"></Title>
        <Spacer y={2} />
        <Row gap={1} align={"flex-start"}>
          <Text>Type</Text>
          <Spacer />
          <GridRadioGroup values={value} size="sm" row onChange={(e) => {
            if (typeof e === "string")
              setUnits(e as LoremUnit);
          } }/>
        </Row>
        <Spacer />
        <Row gap={1} align={"flex-start"}>
          <Text>Length</Text>
          <Spacer />
          <Input type={"number"} min={1} value={count.toString()} onChange={
            (e) => {
              const int = parseInt(e.target.value);
              if (0 < int && int >= 1000)
                setCount(int);
            }
          }></Input>
        </Row>

        <Spacer y={3} />
        <Row justify="center">
          <Textarea rows={20} width="100%" labelPlaceholder="LoremIpsum" value={loremIpsum} />
        </Row>
      </Container>
    </div>
  );
}