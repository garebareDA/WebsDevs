import { useNavigate } from "react-router";
import { Text, Grid, Button } from "@nextui-org/react";
import React from "react";

type TitleProps = {
  title: string;
};

export const Title: React.VFC<TitleProps> = ({ title }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <Grid.Container gap={1} wrap="nowrap">
      <Grid>
        <Button
          auto
          onClick={() => {
            navigate("/");
          }}
        >
          {"<"}
        </Button>
      </Grid>

      <Grid>
        <Text h1 size={24}>
          {" "}
          {title}{" "}
        </Text>
      </Grid>
    </Grid.Container>
  );
};
