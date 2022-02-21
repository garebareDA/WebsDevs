import React from "react";
import { Grid } from "@nextui-org/react";

import baseNumberIcon from "~/assets/image/icon/NumberBase.png";
import convertIcon from "~/assets/image/icon/Convert.png";
import htmlIcon from "~/assets/image/icon/HTML.png";
import base64Icon from "~/assets/image/icon/Base64.png";
import zipIcon from "~/assets/image/icon/Zip.png";
import jwtIcon from "~/assets/image/icon/Jwt.png";
import jsonIcon from "~/assets/image/icon/Json.png";
import sqlIcon from "~/assets/image/icon/Sql.png";
import xmlIcon from "~/assets/image/icon/Xml.png";
import { AppCard } from "~/components/appCard";

export default function Index(): React.ReactElement {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Grid.Container justify="center" gap={2}>
        <Grid>
          <AppCard name="Number Base" icon={baseNumberIcon} url="basenumber" />
        </Grid>
        <Grid>
          <AppCard name="JSON<=>YAML" icon={convertIcon} url="convert" />
        </Grid>
        <Grid>
          <AppCard name="HTML" icon={htmlIcon} url="html" />
        </Grid>

        <Grid>
          <AppCard name="Base64" icon={base64Icon} url="base64"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="ZIP" icon={zipIcon} url="zip"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="JWT Decoder" icon={jwtIcon} url="jwt"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="JSON Formatter" icon={jsonIcon} url="jsonFormatter"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="SQL Formatter" icon={sqlIcon} url="sqlFormatter"/>
        </Grid>

        <Grid>
          <AppCard name="XML Formatter" icon={xmlIcon} url="xmlFormatter"/>
        </Grid>
      </Grid.Container>
    </div>
  );
}
