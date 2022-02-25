import React, { useState, useEffect } from "react";
import { Container, Spacer, Textarea, Grid } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import ReactDiffViewer from "ab-react-diff-viewer";

export default function Index(): React.ReactElement {
  const [newText, setNewDiff] = useState<string>('');
  const [oldText, setOldDiff] = useState<string>('');

  return (
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="Text Diff" />
        <Spacer y={2} />
        <Grid.Container gap={1}>
          <Grid xs={6} alignItems="flex-start">
            <Textarea labelPlaceholder="old text" width="100%" rows={10} onChange={(e) => {
              setOldDiff(e.target.value);
            }}></Textarea>
          </Grid>
          <Grid xs={6}>
            <Textarea labelPlaceholder="new text" width="100%" rows={10} onChange={(e) => {
              setNewDiff(e.target.value);
            }}></Textarea>
          </Grid>
          <Spacer y={1} />
          <Grid xs={12}>
            <ReactDiffViewer oldValue={oldText} newValue={newText} splitView={true} />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}