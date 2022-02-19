import React, { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";

import { useNumberBase } from "../../hooks/baseNumber";

type NumberProps = {
  name: string;
  base: number;
  globalNumber: number | null;
  setGlobalNumber: (num: number | null) => void;
};

export const NumberInput: React.VFC<NumberProps> = ({
  base,
  name,
  globalNumber,
  setGlobalNumber,
}: NumberProps) => {
  const { setBaseNumberString, number, toBase } = useNumberBase(base);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    setGlobalNumber(number);
  }, [number]);

  useEffect(() => {
    if (globalNumber !== null) {
      const result = toBase(globalNumber, base);
      setResult(result);
    } else {
      setResult("");
    }
  }, [globalNumber]);

  return (
    <Input
      labelPlaceholder={name}
      width="100%"
      value={result}
      onChange={(e) => {
        setBaseNumberString(e.target.value);
      }}
    />
  );
};
