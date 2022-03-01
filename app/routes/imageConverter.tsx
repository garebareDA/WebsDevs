import React from "react";
import { Container, Spacer, Row, Text } from "@nextui-org/react";
import { Title } from "~/components/title";
import { FileUploader } from "react-drag-drop-files";
import { GridRadioGroup } from "~/components/radioGroup";
import { useImageConverter } from "~/hooks/imageConverter";
import type { ImageType } from "~/hooks/imageConverter";
import { Image } from "canvas";


export default function Index(): React.ReactElement {
  const value = [
    "jpg",
    "png",
    "webp",
  ];

  const { setFile, setImageType } = useImageConverter();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Image Converter"></Title>
        <Spacer y={2} />
        <Row>
          <Text>Type</Text>
          <GridRadioGroup values={value} size="sm" row onChange={(e) => {
            if (typeof e === "string")
              setImageType(e as ImageType);
          }} />
        </Row>
        <FileUploader handleChange={(file: File) => {
          setFile(file);
        }} />
      </Container>
    </div>
  );
}