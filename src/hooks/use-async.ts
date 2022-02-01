import { useCallback, useEffect, useState } from 'react';

type Status = "idle" | "success" | "pending" | "error";

export const useAsync = <T>(asyncFunction, immediate = true) => {
  const [status, setStatus] = useState<Status>("idle");
  const [value, setValue] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);

  const execute = useCallback(async () => {
    setStatus("pending");
    setValue(null);
    setError(null);

    try {
      setValue(await asyncFunction());
      setStatus("success");
    } catch (error) {
      setError(error);
      setStatus("error");
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};
