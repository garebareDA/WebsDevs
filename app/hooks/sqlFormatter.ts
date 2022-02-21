import { format } from "sql-formatter";
import { useState, useEffect } from "react";

export const useSqlFormatter = ():{
  sql: string,
  setSql: (sql: string) => void,
  formattedSql: string,
  setFormattedSql: (formattedSql: string) => void,
  error: boolean,
} => {
  const [sql, setSql] = useState("");
  const [formattedSql, setFormattedSql] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (sql === "") return;
    try {
      setFormattedSql(format(sql));
      setError(true);
    } catch (error) {
      setError(false);
    }
  }, [sql]);

  return {
    sql,
    setSql,
    formattedSql,
    setFormattedSql,
    error,
  };
};