import { useEffect, useState } from 'react';

/**
 * Return a debounced copy of `value` after `delay` ms.
 */
export default function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);      // cleanup on prop change/unmount
  }, [value, delay]);

  return debounced;
}
