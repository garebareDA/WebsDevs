import React from "react";
import { Card, Row, Text } from "@nextui-org/react";
import Dropzone from "react-dropzone";

type Props = {
  setFile: (file: File) => void;
  fileType: string;
}

export const FileUploader: React.VFC<Props> = ({setFile, fileType} : Props) => {
  return (
    <Dropzone onDrop={(acceptedFiles) => {
      acceptedFiles.forEach(file => {
        setFile(file);
      });
    }}>
      {({ getRootProps, getInputProps }) => (
        <Card {...getRootProps()} hoverable clickable bordered shadow={false} css={{
          mw: "500px",
          width: "100%",
        }}>
          <input {...getInputProps()} />
          <Row justify="center">
            <Text>Dragdrop some files here, or click to select files</Text>
          </Row>
          <Row justify="center">
            <Text>{fileType}</Text>
          </Row>
        </Card>
      )}
    </Dropzone>
  );
};