import { useState, useEffect } from 'react';

const useDebounce = (value: string, delay: number = 500) => {
  const [debounced, setDebounced] = useState(value);
  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    if (value !== '') setIsDebouncing(true);
    const handler = setTimeout(() => {
      setIsDebouncing(false);
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return { debounced, isDebouncing };
};

export default useDebounce;
