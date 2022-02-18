import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useNumberBase = (base: number): {
    baseNumberString: string,
    setBaseNumberString: (number: string) => void,
    number: number | null,
    setNumber: (number: number) => void,
    toBase: (number: number, radix: number) => string,
} => {
    const [baseNumberString, setBaseNumberString] = useState<string>("");
    const [number, setNumber] = useState<number | null>(null);

    useEffect(() => {
        if (baseNumberString === "") {
            setNumber(null);
            return;
        }

        const parsed = fromBase(baseNumberString, base);//10進数に変換
        if (isNaN(parsed)) {
            return;
        }
        setNumber(parsed);
    }, [baseNumberString]);

    const fromBase = (string: string, radix: number): number => {
        const parsed = parseInt(string, radix);
        if (!Number.isSafeInteger(parsed)) return NaN;
        return parsed;
    }

    const toBase = (number: number, radix: number): string => {
        return number.toString(radix);
    }

    return {
        baseNumberString,
        setBaseNumberString,
        number,
        setNumber,
        toBase,
    }
}