import {Container} from "@nextui-org/react";

import { NumberInput } from "~/components/baseNumber/numberInput";

export default function BaseNubmer() {
    return (
        <div>
            <Container gap={0}>
                <NumberInput base={2} name="Binary"/>
            </Container>
        </div>
    );
}