import { useState, useEffect } from "react"

export const useConvertJsonToYaml = () => {
    const [json, setJson] = useState<string>("");
    const [yaml, setYaml] = useState<string>("");

    useEffect(() => {

    }, [json])

    return {
        setJson,
        yaml,
    }
}