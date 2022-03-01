import React from "react";
import { Radio, Grid } from "@nextui-org/react";

type Props = {
  values: string[];
  size?: "sm" | "md" | "lg";
  row?: boolean;
  onChange<T>(value: T): void;
}

export const GridRadioGroup: React.VFC<Props> = ({ values, size, row, onChange }: Props) => {
  return (
    <Radio.Group value={values[0]} size={size} row={row} onChange={(e) => {
        onChange(e);
    }}>
      <Grid.Container>
        {values.map((value, index) => {
          return (
            <Grid key={index}>
              <Radio value={value}>{value}</Radio>
            </Grid>
          );
        })}
      </Grid.Container>
    </Radio.Group>
  );
};