import React, { useState, useEffect } from "react";
import { Container, Spacer, Textarea } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import ReactDiffViewer from "ab-react-diff-viewer";

export default function Index():React.ReactElement{
  const [newText, setNewDiff] = useState<string>('');
  const [oldText, setOldDiff] = useState<string>('');

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Text Diff" />
        <Spacer y={2} />
        <Textarea onChange={(e) => {
          setOldDiff(e.target.value);
        }}></Textarea>
        <Textarea onChange={(e) => {
          setNewDiff(e.target.value);
        }}></Textarea>
        <ReactDiffViewer oldValue={oldText} newValue={newText} splitView={true}/>
      </Container>
    </div>
  );
}