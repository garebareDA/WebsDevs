import React from "react";
import { Container, Spacer, Row, Card, Grid, Text } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { FileUploader } from "react-drag-drop-files";
import { useColorBlind } from "~/hooks/colorBlind";

export default function Index(): React.ReactElement {
  const { setFile, original, protanopia, deuteranopia, tritanopia } = useColorBlind();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Color Blindness Simulator"></Title>
        <Spacer y={2} />
        <Row justify="center">
          <FileUploader handleChange={(file: File) => {
            setFile(file);
          }}></FileUploader>
        </Row>
        <Spacer y={2} />
        <Grid.Container gap={1}>
          <Grid xs={6}>
            <Card>
              <Card.Body>
                <img src={original} alt="" />
              </Card.Body>
              <Card.Footer>
                <Text>
                  Original
                </Text>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6}>
            <Card>
              <Card.Body>
                <img src={protanopia} alt="" />
              </Card.Body>
              <Card.Footer>
                <Text>
                  Protanopia
                </Text>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6}>
            <Card>
              <Card.Body>
                <img src={deuteranopia} alt="" />
              </Card.Body>
              <Card.Footer>
                <Text>
                  Deuteranopia
                </Text>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6}>
            <Card>
              <Card.Body>
                <img src={tritanopia} alt="" />
              </Card.Body>
              <Card.Footer>
                <Text>
                  Tritanopia
                </Text>
              </Card.Footer>
            </Card>
          </Grid>

        </Grid.Container>
      </Container>
    </div>
  );
};