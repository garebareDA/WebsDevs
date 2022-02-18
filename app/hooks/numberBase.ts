import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useNumberBase = (base: number):{
    baseNumberString:string,
    setBaseNumberString:Dispatch<SetStateAction<string>>,
    number:number,
    setNumber:Dispatch<SetStateAction<number>>,
    baseNumberError:boolean,
} => {
    const [baseNumberString, setBaseNumberString] = useState<string>("");
    const [number, setNumber] = useState<number>(0);
    const [baseNumberError, setBaseNumberError] = useState<boolean>(false);

    useEffect(() => {
        const parsed = parseInt(baseNumberString, base);
        if(isNaN(parsed)) {
            setBaseNumberError(true);
            return;
        }

        setBaseNumberError(false);
        setNumber(parsed);
    }, [baseNumberString]);

    

    return {
        baseNumberString,
        setBaseNumberString,
        number,
        setNumber,
        baseNumberError,
    }
}