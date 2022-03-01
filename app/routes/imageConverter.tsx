import React from "react";
import { Container, Spacer, Row, Text } from "@nextui-org/react";
import { Title } from "~/components/title";
import { FileUploader } from "react-drag-drop-files";
import { GridRadioGroup } from "~/components/radioGroup";


export default function Index(): React.ReactElement {
  const value = [
    "jpg",
    "png",
    "webp",
  ];

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Image Converter"></Title>
        <Spacer y={2} />
        <Row>
          <Text>Type</Text>
          <GridRadioGroup values={value} size="sm" row onChange={(e) => {
            console.log(e);
          }}/>
        </Row>
        <FileUploader handleChange={(file:File) => {
          console.log(file);
        }}/>
      </Container>
    </div>
  );
}