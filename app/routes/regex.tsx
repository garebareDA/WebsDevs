import React from "react";
import { Container, Spacer, Input, Grid} from "@nextui-org/react";
import { Title } from "~/components/title";
import { GridRadioGroup } from "~/components/radioGroup";
import { useRegex } from "~/hooks/regex";
import type { Regex } from "~/hooks/regex";

export default function Index(): React.ReactElement {
  const value: Regex[] = [
    "match",
    "search",
    "split",
    "test",
    "exec",
  ];

  const { input, setInput, regex, setRegex, result, setRegexType, isError } = useRegex();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title={'Regex'}></Title>
        <Spacer y={2} />
        <Grid.Container gap={4} justify="center">
          <Grid xs={12}>
            <GridRadioGroup values={value} size="sm" row onChange={(e) => {
              if (typeof e === "string")
                setRegexType(e as Regex);
            }} />
          </Grid>
          <Grid xs={12}>
            <Input onChange={(e) => {
              setInput(e.target.value);
            }} value={input} labelPlaceholder="text" width="100%;" />
          </Grid>
          <Grid xs={12}>
            <Input onChange={(e) => {
              setRegex(e.target.value);
            }} value={regex} labelPlaceholder="regex" width="100%" status={isError ? "error" : "default"} />
          </Grid>
          <Grid xs={12}>
            <Input readOnly value={result} labelPlaceholder="result" width="100%" />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}