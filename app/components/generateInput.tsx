import React from "react";
import { Textarea } from "@nextui-org/react";

type Props = {
  name: string;
  value: string;
};

export const GenerateInput: React.VFC<Props> = ({ name, value }: Props) => {
  return (
    <Textarea labelPlaceholder={name} width="100%" value={value} readOnly rows={10} />
  );
};