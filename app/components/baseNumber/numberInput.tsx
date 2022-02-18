import * as React from 'react';
import { Row, Input, Spacer } from "@nextui-org/react";

import { useNumberBase } from "~/hooks/numberBase";

type NumberProps = {
    name: string;
    base: number;
}

export const NumberInput: React.VFC<NumberProps> = ({ base, name }) => {
    const { setBaseNumberString, baseNumberError, number } = useNumberBase(base);


    return (
        <div>
            <Spacer y={2}></Spacer>
            <Row justify="center">
                <Input labelPlaceholder={name} width="40%" onChange={(e) => {
                    setBaseNumberString(e.target.value);
                }} />
            </Row>
        </div>
    )
}