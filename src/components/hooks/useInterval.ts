import { useEffect, useRef } from 'react';

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback); // Store the callback function in a ref

  useEffect(() => {
    savedCallback.current = callback; // Update the stored callback when callback changes
  }, [callback]);

  useEffect(() => {
    if (delay === null) return; // Don't set up interval if delay is null
    const id = setInterval(() => savedCallback.current(), delay); // Set up interval with stored callback

    return () => clearInterval(id); // Clean up interval on unmount or delay change
  }, [delay]);
}

export default useInterval;
