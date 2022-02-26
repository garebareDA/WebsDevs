import React, {useState} from "react";
import { Container, Spacer, Grid, Textarea } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import ReactMarkdown from "react-markdown";

export default function Index():React.ReactElement {
  const [input, setInput] = useState<string>('');

  return(
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="MarkDown Viewer" />
        <Spacer y={2} />
        <Grid.Container justify="center" gap={2}>
          <Grid xs={6}>
            <Textarea labelPlaceholder="markdown" width="100%" rows={30} maxRows={0} onChange={(e) => {
              setInput(e.target.value);
            }} />
          </Grid>
          <Grid xs={6} css={{
            overflow:'scroll',
          }}>
            <ReactMarkdown>
              {input}
            </ReactMarkdown>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};