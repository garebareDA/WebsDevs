import React from "react";
import { Grid, Row, Container, Spacer, Text, Link } from "@nextui-org/react";
import dotIcon from "~/assets/image/icon.png";
import { AppCard } from "~/components/appCard";
import { apps } from "~/data/apps";

export default function Index(): React.ReactElement {
  return (
    <Container justify="center" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Row align="center" gap={1}>
        <img src={dotIcon} style={{
          maxHeight: "40px",
          maxWidth: "40px",
          borderRadius: "50%",
        }} />
        <Text size={32}>DotToys</Text>
        <Text size={16}>
          <Link color={"primary"} href="https://github.com/garebareDA/WebsDevs" target="_blank" underline>
            GitHub
          </Link>
        </Text>
      </Row>
      <hr />
      <Spacer y={2} />
      <Grid.Container gap={2}>
        {apps.map((app, index) => {
          return (
            <div key={index}>
              <Grid.Container key={index} gap={1}>
                <Row>
                  <Text>{app.name}</Text>
                </Row>
                {app.list.map((app, index) => {
                  return (
                    <Grid key={index}>
                      <AppCard name={app.name} icon={app.icon} url={app.path} />
                    </Grid>
                  );
                })}
              </Grid.Container>
              <Spacer y={2} />
            </div>
          );
        })}
      </Grid.Container>
    </Container>
  );
}
