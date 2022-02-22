import React, { useEffect } from "react";
import { Container, Spacer, Row, Textarea, Radio, Text, Input } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useLoremIpsum } from "~/hooks/loremIpsum";
import { LoremUnit } from "lorem-ipsum/types/src/constants/units";

export default function Index(): React.ReactElement {
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
          <Radio.Group value={"paragraphs"} row size={"sm"} onChange={(e) => {
            if (typeof e === "string") {
              setUnits(e as LoremUnit);
            };
          }}>
            <Radio value={"paragraphs"}>
              Paragraphs
            </Radio>
            <Radio value={"sentences"}>
              Sentences
            </Radio>
            <Radio value={"words"}>
              Words
            </Radio>
          </Radio.Group>
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