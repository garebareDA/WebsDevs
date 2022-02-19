import { useState, useEffect } from "react";

export const useHtml = () => {
    const [encode, setEncode] = useState<string>("");
    const [decode, setDecode] = useState<string>("");

    useEffect(() => {
        return;
    }, [encode]);

    useEffect(() => {
        return;
    }, [decode]);

    return;
};