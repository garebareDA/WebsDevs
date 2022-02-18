import { Container, Spacer, Textarea, Grid } from "@nextui-org/react"
import { useEffect } from "react";
import { Title } from "~/components/util/title"
import { useConvertJsonToYaml } from "~/hooks/convert"

export default function Index() {
    const { json, setJson, yaml } = useConvertJsonToYaml();

    return (
        <div>
            <Container gap={1} justify="center" css={{ maxWidth: "60%" }}>
                <Spacer y={1} />
                <Title title="json<=>yaml"></Title>
                <Spacer y={2} />
                <Grid.Container gap={2} justify="center" alignItems="flex-start">
                    <Grid xs={6}>
                        <Textarea maxRows={1000} labelPlaceholder="json" fullWidth wrap="off" onChange={(e) => {
                            setJson(e.target.value);
                        }}/>
                    </Grid>
                    <Grid xs={6}>
                        <Textarea maxRows={1000} labelPlaceholder="yaml" fullWidth wrap="off" value={yaml}/>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}