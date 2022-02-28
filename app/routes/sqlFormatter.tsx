import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import { Title } from "~/components/title";
import { TextAreaEncodeDecode } from "~/components/decodeEncode";
import { useSqlFormatter } from "~/hooks/sqlFormatter";

export default function Index():React.ReactElement {
  const { sql, setSql, formattedSql, setFormattedSql, error } = useSqlFormatter();
  return(
    <div>
      <Container gap={1} justify="center">
        <Spacer y={1} />
        <Title title="SQL Formatter"></Title>
        <Spacer y={2} />
        <TextAreaEncodeDecode
          decodeSet={setSql}
          decodeValue={sql}
          decodeLabel="sql"
          decodeStatus={error ? "error" : "default"}
          encodeSet={setFormattedSql}
          encodeValue={formattedSql}
          encodeLabel="formatted(read only)"
          encodeStatus={"default"}
          readonly={true}
        />
      </Container>
    </div>
  );
}