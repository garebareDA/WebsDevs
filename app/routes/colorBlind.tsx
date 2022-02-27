import React from "react";
import { Container, Spacer, Row } from "@nextui-org/react";
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
        <img src={original} alt="" />
        <img src={protanopia} alt="" />
        <img src={deuteranopia} alt="" />
        <img src={tritanopia} alt="" />
      </Container>
    </div>
  );
};