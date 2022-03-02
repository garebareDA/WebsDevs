import React from "react";
import { Card, Grid, Row, Text } from "@nextui-org/react";

type Props = {
  image: string;
  name: string;
}

export const Converted: React.VFC<Props> = ({ image, name }: Props): React.ReactElement => {
  return (
    <Grid>
      <a href={image} download={name}>
        <Card hoverable clickable>
          <Card.Body>
            <Row justify="center">
              <img src={image} alt="" style={
                { width: "140px" }
              } />
            </Row>
          </Card.Body>
          <Row gap={2}>
            <Text>{name}</Text>
          </Row>
        </Card>
      </a>
    </Grid>
  );
};