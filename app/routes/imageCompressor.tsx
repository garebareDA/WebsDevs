import React from "react";
import { Container, Spacer, Row, Grid } from "@nextui-org/react";
import { Title } from "~/components/title";
import { useCompressor } from "~/hooks/compressor";
import { FileUploader } from "~/components/dropZone";
import { Compressed } from '~/components/compressed';

export default function Index(): React.ReactElement {
  const { setFile, compressedFiles, error } = useCompressor();
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Image Compressor"></Title>
        <Spacer y={2} />
        <Row justify="center">
        <FileUploader setFile={setFile} fileType={"png, jpg"} error={error}/>
        </Row>
        <Spacer y={2} />
        <Grid.Container gap={2} justify="flex-start">
          {compressedFiles.map((result, index) => {
            const kb = 1024;
            const mb = Math.pow(kb, 2);
            const gb = Math.pow(kb, 3);
            const size = result.file.size;
            const getSize = (): {
              target: number | null,
              unit: string
            } => {
              if (size >= gb) return { target: gb, unit: 'GB' };
              if (size >= mb) return { target: mb, unit: 'MB' };
              if (size >= kb) return { target: kb, unit: 'KB' };
              return { target: null, unit: 'byte' };
            };
            const { target, unit } = getSize();
            const d = Math.pow(10, 2);
            const newSize = target !== null ? Math.floor((size / target) * d) / d : size;
            const sizeText = newSize + unit;

            return (
              <Compressed key={index} image={result.url} name={result.file.name} size={sizeText} />
            );
          })}
        </Grid.Container>
      </Container>
    </div>
  );
};