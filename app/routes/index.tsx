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
import hashIcon from "~/assets/image/icon/Hash.png";
import uuidIcon from "~/assets/image/icon/Uuid.png";
import checkSumIcon from "~/assets/image/icon/CheckSum.png";
import textIcon from "~/assets/image/icon/Text.png";
import regexIcon from "~/assets/image/icon/Regex.png";
import diffIcon from "~/assets/image/icon/Diff.png";
import markDownIcon from "~/assets/image/icon/Markdown.png";
import colorBlindIcon from "~/assets/image/icon/Eye.png";
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
          <AppCard name="SQL Formatter" icon={sqlIcon} url="sqlFormatter" />
        </Grid>

        <Grid>
          <AppCard name="XML Formatter" icon={xmlIcon} url="xmlFormatter" />
        </Grid>

        <Grid>
          <AppCard name="Hash" icon={hashIcon} url="hash" />
        </Grid>

        <Grid>
          <AppCard name="UUID" icon={uuidIcon} url="uuid" />
        </Grid>

        <Grid>
          <AppCard name="CheckSum" icon={checkSumIcon} url="checksum" />
        </Grid>

        <Grid>
          <AppCard name="Case Converter" icon={textIcon} url="text"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="Regex" icon={regexIcon} url="Regex"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="Text Diff" icon={diffIcon} url="diff"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="Markdown preview" icon={markDownIcon} url="markdown"></AppCard>
        </Grid>

        <Grid>
          <AppCard name="Color Blind Simulator" icon={colorBlindIcon} url="colorblind"></AppCard>
        </Grid>

      </Grid.Container>
    </div>
  );
}
