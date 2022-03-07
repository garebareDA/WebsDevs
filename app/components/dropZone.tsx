import React, { useState } from "react";
import { Card, Row, Text, Spacer } from "@nextui-org/react";
import Dropzone from "react-dropzone";

type Props = {
  setFile: (file: File) => void;
  fileType: string[];
  error: boolean;
}

export const FileUploader: React.VFC<Props> = ({ setFile, fileType, error }: Props) => {
  const [isError, setIsError] = useState(false);
  return (
    <Dropzone onDrop={(acceptedFiles) => {
      acceptedFiles.forEach(file => {
        if (fileType.length != 0) {
          fileType.map((type) => {
            const fileTypes = file.type;
            if (fileTypes === "image/" + type) {
              setIsError(false);
              setFile(file);
              return;
            }
            setIsError(true);
            console.log("File type is not supported");
          });
        } else {
          setIsError(false);
          setFile(file);
        }
      });
    }}>
      {({ getRootProps, getInputProps }) => (
        <Card {...getRootProps()} hoverable clickable bordered shadow={false} css={{
          mw: "500px",
          width: "100%",
        }}
        >
          <input {...getInputProps()} />
          <Row justify="center">
            <Text>Dragdrop some files here, or click to select files</Text>
          </Row>
          <Row justify="center">
            {fileType.map((type, i) => {
              return (
                <div key={i}>
                  <Text>{type}, </Text>
                </div>
              );
            })}
          </Row>
          <Spacer y={2}></Spacer>
          {(error || isError) &&
            <Row justify="center">
              <Text size={24} color={(isError || error) ? "error" : "default"}>File Error</Text>
            </Row>
          }
        </Card>
      )}
    </Dropzone>
  );
};