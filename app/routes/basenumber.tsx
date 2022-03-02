import React, { useState } from "react";
import { Container, Row, Spacer, Grid, Input } from "@nextui-org/react";
import { Title } from "~/components/title";
import { BaseNumberInput, NumberInput } from "~/components/numberInput";
import type { BaseNumber } from "~/components/numberInput";

export default function BaseNumber(): React.ReactElement {
  const baseNumberList: BaseNumber[] = [
    { name: "Binary", value: 2 },
    { name: "Octal", value: 8 },
    { name: "Decimal", value: 10 },
    { name: "Duodecimal", value: 12 },
    { name: "Hexadecimal", value: 16 },
  ];

  const [number, setNumber] = useState<number | null>(0);
  const [custom, setCustom] = useState<number>(8);

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Base Number"></Title>
        <BaseNumberInput baseNumberList={baseNumberList} globalNumber={number} setGlobalNumber={setNumber}/>
        <Spacer y={2} />
        <Row justify="center">
          <Grid.Container justify="center" gap={1}>
            <Grid xs={3}>
              <Input
                type={"number"}
                min={2}
                max={36}
                value={custom.toString()}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (
                    ((value >= 2 && value <= 36) || Number.isNaN(value)) &&
                    value !== custom
                  ) {
                    setCustom(value);
                  }
                }}
              />
            </Grid>

            <Grid xs={9}>
              <NumberInput
                base={custom}
                name="Custom"
                globalNumber={number}
                setGlobalNumber={setNumber}
              />
            </Grid>
          </Grid.Container>
        </Row>
      </Container>
    </div>
  );
}
