import { Container, Spacer, Textarea, Grid } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { useConvertJsonYaml } from "~/hooks/convert";
import React from "react";

export default function Index():React.ReactElement {
  const { json, setJson, yaml, setYaml } = useConvertJsonYaml();

  return (
    <div>
      <Container gap={1} justify="center" css={{ maxWidth: "60%" }}>
        <Spacer y={1} />
        <Title title="json<=>yaml"></Title>
        <Spacer y={2} />
        <Grid.Container gap={2} justify="center" alignItems="flex-start">
          <Grid xs={6}>
            <Textarea
              maxRows={500}
              minRows={20}
              labelPlaceholder="json"
              fullWidth
              onChange={(e) => {
                setJson(e.target.value);
              }}
              value={json}
            />
          </Grid>
          <Grid xs={6}>
            <Textarea
              maxRows={500}
              minRows={20}
              labelPlaceholder="yaml"
              fullWidth
              onChange={(e) => {
                setYaml(e.target.value);
              }}
              value={yaml}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
}
