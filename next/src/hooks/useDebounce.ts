import { useState, useEffect } from "react";

const useDebounce = (value: string, delay: number = 500) => {
  const [debounced, setDebounced] = useState(value);
  const [isWating, setIsWating] = useState(false);

  useEffect(() => {
    if (value !== "") setIsWating(true);
    const handler = setTimeout(() => {
      setIsWating(false);
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return { debounced, isWating };
};

export default useDebounce;
