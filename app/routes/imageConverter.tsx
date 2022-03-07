import React from "react";
import { Container, Spacer, Row, Text, Grid } from "@nextui-org/react";
import { Title } from "~/components/title";
import { FileUploader } from "~/components/dropZone";
import { GridRadioGroup } from "~/components/radioGroup";
import { useImageConverter } from "~/hooks/imageConverter";
import type { ImageType } from "~/hooks/imageConverter";
import { Converted } from "~/components/converted";

export default function Index(): React.ReactElement {
  const value:ImageType[] = [
    "jpeg",
    "png",
  ];

  const { setFile, setImageType, converted } = useImageConverter();

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Image Converter"></Title>
        <Spacer y={2} />
        <Row gap={2}>
          <Text>Type</Text>
          <GridRadioGroup values={value} size="sm" row onChange={(e) => {
            if (typeof e === "string")
              setImageType(e as ImageType);
          }} />
        </Row>
        <Row justify="center">
        <FileUploader setFile={setFile} fileType={["png", "jpeg"]} error={false}/>
        </Row>
        <Spacer y={2} />
        <Grid.Container gap={2} justify="flex-start">
          {converted.map((result, index) => {
            const name = result.file.name.split(/\.(?=[^.]+$)/)[0] + "." + (result.type as string);
            return (
              <Converted key={index} image={result.url} name={name} />
            );
          })}
        </Grid.Container>
      </Container>
    </div>
  );
}