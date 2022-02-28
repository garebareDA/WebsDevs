import React from "react";
import { Container, Spacer, Row, Grid } from "@nextui-org/react";
import { Title } from "~/components/title";
import { ColorBlindCard } from "~/components/colorBlindCard";
import { FileUploader } from "react-drag-drop-files";
import { useColorBlind } from "~/hooks/colorBlind";

export default function Index(): React.ReactElement {
  const { setFile, original, protanopia, deuteranopia, tritanopia } = useColorBlind();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Color Blindness Simulator"></Title>
        <Spacer y={1} />
        <Row justify="center">
          <FileUploader handleChange={(file: File) => {
            setFile(file);
          }}></FileUploader>
        </Row>
        <Spacer y={2} />
        <Grid.Container gap={1} justify="center">
          <ColorBlindCard image={original} text="Original" />
          <ColorBlindCard image={protanopia} text="Protanopia" />
        </Grid.Container>
        <Grid.Container gap={1} justify="center">
          <ColorBlindCard image={tritanopia} text="Tritanopia" />
          <ColorBlindCard image={deuteranopia} text="Deuteranopia" />
        </Grid.Container>
      </Container>
    </div>
  );
};