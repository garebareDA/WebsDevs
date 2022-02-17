import { Grid, Card, Text } from "@nextui-org/react";

import baseNumberIcon from "../../assets/image/icon/base-number.png";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Grid.Container>
        <Grid xs={6} sm={3}>
          <Card>
            <Card.Body>
              <Text></Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}
