import React from "react";
import { Grid } from "@nextui-org/react";

import baseNumberIcon from "~/assets/image/icon/NumberBase.png";
import convertIcon from "~/assets/image/icon/Convert.png";
import htmlIcon from "~/assets/image/icon/HTML.png";
import base64Icon from "~/assets/image/icon/Base64.png";
import { AppCard } from "~/components/appCard";

export default function Index(): React.ReactElement {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Grid.Container justify="center" gap={2}>
        <Grid>
          <AppCard name="Number Base" icon={baseNumberIcon} url="basenumber" />
        </Grid>
        <Grid>
          <AppCard name="json<=>yaml" icon={convertIcon} url="convert" />
        </Grid>
        <Grid>
          <AppCard name="html" icon={htmlIcon} url="html" />
        </Grid>

        <Grid>
          <AppCard name="base64" icon={base64Icon} url="base64"></AppCard>
        </Grid>
      </Grid.Container>
    </div>
  );
}
