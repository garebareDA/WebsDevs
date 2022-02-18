import { useNavigate } from "remix";
import {Text, Grid, Button, Spacer, Container} from "@nextui-org/react";

type TitleProps = {
    title:string;
}

export const Title:React.VFC<TitleProps> = ({title}) => {
    const navigate = useNavigate();
    return(
            <Grid.Container gap={1} wrap="nowrap">
                <Grid>
                    <Button auto onClick={() => {
                        navigate("/");
                    }}>{"<"}</Button>
                </Grid>

                <Grid>
                    <Text h1 size={24}> {title} </Text>
                </Grid>
            </Grid.Container>
    );
}