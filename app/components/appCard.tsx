import * as React from 'react';
import { Card, Text, Row } from "@nextui-org/react"

type CardProps = {
    name:string;
    icon:string;
};

export const AppCard:React.VFC<CardProps> = ({name, icon}) => {
    return (
        <div>
            <Card clickable hoverable cover>
                <Card.Body>
                    <Card.Image css={{ filter: "invert(100%)" }} src={icon} width={"80%"} height="140px" />
                </Card.Body>
                <Card.Footer >
                    <Row justify="center">
                        <Text b>
                            {name}
                        </Text>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    )
}