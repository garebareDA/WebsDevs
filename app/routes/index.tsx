import React from "react";
import { Grid } from "@nextui-org/react";

import baseNumberIcon from "~/assets/image/icon/NumberBase.png";
import { AppCard } from "~/components/appCard";

export default function Index():React.ReactElement {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Grid.Container justify="center" gap={2}>
        <Grid xs={5} sm={1.5}>
          <AppCard name="Number Base" icon={baseNumberIcon} url="basenumber" />
        </Grid>
      </Grid.Container>
    </div>
  );
}
