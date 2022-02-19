import * as React from "react";
import { useNavigate } from "remix";
import { Card, Text, Row } from "@nextui-org/react";

type CardProps = {
  name: string;
  icon: string;
  url: string;
};

export const AppCard: React.VFC<CardProps> = ({ name, icon, url }:CardProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        clickable
        hoverable
        cover
        onClick={() => {
          navigate(url);
        }}
      >
        <Card.Body>
          <Card.Image
            css={{ filter: "invert(100%)" }}
            src={icon}
            width="140px"
            height="140px"
          />
        </Card.Body>
        <Card.Footer>
          <Row justify="center">
            <Text b>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};
