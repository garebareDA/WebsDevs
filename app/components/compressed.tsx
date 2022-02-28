import React from "react";
import { Grid, Card, Text, Row } from "@nextui-org/react";

type Props = {
  image: string;
  name: string;
  size: string;
};

export const Compressed: React.VFC<Props> = ({ image, name, size }: Props): React.ReactElement => {
  return (
    <Grid justify="center">
      <Card hoverable clickable onClick={() => {
        window.open(image);
      }}>
        <Card.Body>
          <Row justify="center">
          <img src={image} style={{
            width: "140px",
          }} />
          </Row>
        </Card.Body>
        <Row gap={2}>
          <Text>{name}</Text>
        </Row>
        <Row gap={2}>
          <Text>{size}</Text>
        </Row>
      </Card>
    </Grid>
  );
};