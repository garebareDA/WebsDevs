import { Grid, Card, Text, Row } from "@nextui-org/react";

import baseNumberIcon from "../assets/image/icon/NumberBase.png";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Grid.Container justify="center" gap={2}>
        <Grid xs={5} sm={1.5}>
          <Card clickable hoverable cover>
            <Card.Body>
              <Card.Image css={{filter:"invert(100%)"}} src={baseNumberIcon} width={"80%"} height="140px"/>
            </Card.Body>
            <Card.Footer >
              <Row justify="center">
                <Text b>
                  Base Number
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
}
