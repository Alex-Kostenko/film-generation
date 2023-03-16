import { useRef, useEffect } from 'react';

type Timer = ReturnType<typeof setTimeout>;
type SomeFunction = (...args: string[]) => void;
/**
 *
 * @param func
 * @param delay
 * @returns
 */

export function useDebounce<Func extends SomeFunction>(
  func: Func,
  delay = 2000,
) {
  const timer = useRef<Timer>();

  useEffect(() => {
    return () => {
      if (!timer.current) return;
      clearTimeout(timer.current);
    };
  }, []);

  const debouncedFunction = ((...args) => {
    const newTimer = setTimeout(() => {
      func(...args);
    }, delay);
    clearTimeout(timer.current);
    timer.current = newTimer;
  }) as Func;

  return debouncedFunction;
}
