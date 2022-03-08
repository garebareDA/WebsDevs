import React from "react";
import { Textarea, Grid, Button } from "@nextui-org/react";

type Props = {
  encodeSet: (value: string) => void;
  encodeValue: string;
  encodeLabel: string;
  encodeStatus: "error" | "default";
  decodeSet: (value: string) => void;
  decodeValue: string;
  decodeLabel: string;
  decodeStatus: "error" | "default";
  readonly?: boolean;
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
  readonly = false,
}: Props): React.ReactElement => {
  return (
    <div>

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
            readOnly={readonly}
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
      <Grid.Container gap={1}>
        <Grid xs={6} justify="flex-end" >
          <Button.Group size="xs">
            <Button onClick={() => {
              navigator.clipboard.writeText(decodeValue);
            }}> Copy </Button>
            <Button onClick={() => {
              navigator.clipboard.readText().then((text) => {
                decodeSet(text);
              });
            }}>Pest</Button>
            <Button onClick={() => {
              decodeSet("");
            }}> Delete </Button>
          </Button.Group>
        </Grid>

        <Grid xs={6} justify="flex-end">
          <Button.Group size="xs">
            <Button onClick={() => {
              navigator.clipboard.writeText(encodeValue);
            }}> Copy </Button>
            {!readonly && <Button onClick={() => {
              navigator.clipboard.readText().then((text) => {
                encodeSet(text);
              });
            }}>Pest</Button>}
            {!readonly && <Button onClick={() => { encodeSet(""); }}> Delete </Button>}
          </Button.Group>
        </Grid>
      </Grid.Container>
    </div>
  );
};
