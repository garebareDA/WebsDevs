import { useState } from "react";
import { Container, Row, Spacer, Grid, Input } from "@nextui-org/react";
import { Title } from "~/components/util/title";
import { NumberInput } from "~/components/baseNumber/numberInput";
export default function BaseNubmer() {
    const [number, setNumber] = useState<number | null>(0);
    const [custom, setCustom] = useState<number>(8);

    return (
        <div>
            <Container gap={1} justify="center" css={{ maxWidth: "60%" }}>

                <Spacer y={1} />
                <Title title="Base Number"></Title>

                <Spacer y={2} />
                <Row justify="center">
                    <NumberInput base={2} name="Binary" globalNumber={number} setGlobalNumber={setNumber} />
                </Row>

                <Spacer y={2} />
                <Row justify="center">
                    <NumberInput base={8} name="Octal" globalNumber={number} setGlobalNumber={setNumber} />
                </Row>

                <Spacer y={2} />
                <Row justify="center">
                    <NumberInput base={10} name="Decimal" globalNumber={number} setGlobalNumber={setNumber} />
                </Row>

                <Spacer y={2} />
                <Row justify="center">
                    <NumberInput base={12} name="Duodecimal" globalNumber={number} setGlobalNumber={setNumber} />
                </Row>

                <Spacer y={2} />
                <Row justify="center">
                    <NumberInput base={16} name="Hexadecimal" globalNumber={number} setGlobalNumber={setNumber} />
                </Row>

                <Spacer y={2} />
                <Row justify="center">
                    <Grid.Container justify="center" gap={1}>
                        <Grid xs={3}>
                            <Input type={"number"} min={2} max={36} value={custom.toString()} onChange={(e) => {
                                const value = parseInt(e.target.value);
                                console.log(value);
                                if (((value >= 2 && value <= 36) || Number.isNaN(value)) && value !== custom) {
                                    setCustom(value);
                                }
                            }} />
                        </Grid>

                        <Grid xs={9}>
                            <NumberInput base={custom} name="Custom" globalNumber={number} setGlobalNumber={setNumber} />
                        </Grid>
                    </Grid.Container>
                </Row>
            </Container>
        </div>
    );
}