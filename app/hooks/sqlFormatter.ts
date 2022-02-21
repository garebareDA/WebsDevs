import { format } from "sql-formatter";
import { useState, useEffect } from "react";

export const useSqlFormatter = (): {
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
    try {
      setFormattedSql(format(sql));
      setError(false);
    } catch (error) {
      setError(true);
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