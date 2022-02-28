import React from "react";
import { Grid,Card,Text } from "@nextui-org/react";

type Props = {
  text:string,
  image:string,
}

export const ColorBlindCard: React.VFC<Props> = ({text, image}:Props) => {
  return (
    <Grid justify="center">
      <Card>
        <Card.Body>
          <img src={image} alt="" style={{maxHeight:"250px", width:"auto"}}/>
        </Card.Body>
        <Card.Footer>
          <Text>
            {text}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};