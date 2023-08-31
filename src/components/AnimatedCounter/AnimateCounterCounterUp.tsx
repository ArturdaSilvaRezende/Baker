import { useState, useEffect, useCallback, useRef } from "react";
import { useDebounce } from "use-debounce";

interface CounterUpAnimatedProps {
  finalValue: number;
}

const AnimateCounterCounterUp = (props: CounterUpAnimatedProps) => {
  const [count, setCount] = useState(0);
  const [debouncedCount] = useDebounce(count, 10);
  const incrementRef = useRef(props.finalValue / 50);
  const intervalIdRef = useRef<number | null>(null);
  const currentCountRef = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight / 2;

    if (scrollTop >= windowHeight) {
      intervalIdRef.current = setInterval(() => {
        currentCountRef.current += incrementRef.current;
        setCount(currentCountRef.current);

        if (currentCountRef.current >= props.finalValue) {
          clearInterval(intervalIdRef.current as number);
        }
      }, 20);
      window.removeEventListener("scroll", handleScroll);
    }
  }, [props.finalValue]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [props.finalValue, handleScroll, intervalIdRef]);

  return <h2>{Math.round(debouncedCount)}</h2>;
};

export default AnimateCounterCounterUp;
