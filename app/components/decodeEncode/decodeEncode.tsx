import React from "react";
import { Textarea, Grid } from "@nextui-org/react";

type Props = {
  encodeSet: (value: string) => void;
  encodeValue: string;
  encodeLabel: string;
  encodeStatus: "error" | "default";
  decodeSet: (value: string) => void;
  decodeValue: string;
  decodeLabel: string;
  decodeStatus: "error" | "default";
};

export const TextAreaEncodeDecode = ({
  encodeSet,
  encodeValue,
  encodeLabel,
  encodeStatus,
  decodeSet,
  decodeValue,
  decodeLabel,
  decodeStatus,
}: Props): React.ReactElement => {
  return (
    <Grid.Container gap={2} justify="center" alignItems="flex-start">
      <Grid xs={6}>
        <Textarea
          maxRows={500}
          minRows={20}
          labelPlaceholder={decodeLabel}
          fullWidth
          onChange={(e) => {
            decodeSet(e.target.value);
          }}
          value={decodeValue}
          status={decodeStatus}
        />
      </Grid>

      <Grid xs={6}>
        <Textarea
          maxRows={500}
          minRows={20}
          labelPlaceholder={encodeLabel}
          fullWidth
          onChange={(e) => {
            encodeSet(e.target.value);
          }}
          value={encodeValue}
          status={encodeStatus}
        />
      </Grid>
    </Grid.Container>
  );
};
