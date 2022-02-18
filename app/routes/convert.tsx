import { Container, Spacer, Textarea, Grid } from "@nextui-org/react"
import { Title } from "~/components/util/title"

export default function Index() {
    return (
        <div>
            <Container gap={1} justify="center" css ={{maxWidth: "60%"}}>
                <Spacer y={1} />
                <Title title="json<=>yaml"></Title>
                <Spacer y={2} />
                <Grid.Container gap={2} justify="center" alignItems="flex-start">
                    <Grid xs={6}>
                        <Textarea maxRows={1000} labelPlaceholder="json" fullWidth wrap="off"/>
                    </Grid>
                    <Grid xs={6}>
                        <Textarea  maxRows={1000} labelPlaceholder="yaml" fullWidth wrap="off"/>
                    </Grid>
                </Grid.Container>
            </Container>
        </div>
    )
}