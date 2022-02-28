import React, { useState } from "react";
import { Container, Row, Spacer, Text, Input, Radio } from "@nextui-org/react";
import { Title } from "~/components/title";
import { FileUploader } from "react-drag-drop-files";
import { useChecksum } from "~/hooks/checksum";
import type { CheckSumType } from "~/hooks/checksum";


export default function Index(): React.ReactElement {
  const { setCheckSumType, setFirstFile, setSecondFile, firstOutput, secondOutput, checkSum } = useChecksum();
  const [isNext, setIsNext] = useState(true);
  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Check Sum"></Title>
        <Spacer y={2} />
        <Row gap={1} align={"flex-start"}>
          <Text>Algorithm</Text>
          <Spacer />
          <Radio.Group row size={"sm"} value={"md5"} onChange={(e) => {
            if (typeof e === "string")
              setCheckSumType(e as CheckSumType);
          }}>
            <Radio value={"md5"}>
              MD5
            </Radio>
            <Radio value={"sha1"}>
              SHA1
            </Radio>
            <Radio value={"sha256"}>
              SHA256
            </Radio>
            <Radio value={"sha512"}>
              SHA512
            </Radio>
          </Radio.Group>
        </Row>

        <Spacer />
        <Row justify="center">
          <FileUploader handleChange={(file: File) => {
            setIsNext(!isNext);
            file.text().then((text) => {
              if (isNext) {
                setFirstFile(text);
              } else {
                setSecondFile(text);
              }
            });
          }}></FileUploader>
        </Row>

        <Spacer y={2} />
        <Row justify="center" gap={1}>
          <Input status={checkSum ? "default" : "error"} labelPlaceholder="First Output" width="100%" readOnly value={firstOutput} />
        </Row>

        <Spacer y={2} />
        <Row justify="center" gap={1}>
          <Input status={checkSum ? "default" : "error"} labelPlaceholder="Second Output" width="100%" readOnly value={secondOutput} />
        </Row>
      </Container>
    </div>
  );
}