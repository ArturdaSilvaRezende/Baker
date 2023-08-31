import { useEffect, useCallback, useRef } from "react";
import { useDebounce } from "use-debounce";
import "../assets/style/animations.css";

const useAnimateScroll = () => {
  const animateScrollRef = useRef<HTMLElement[]>([]);
  const VISIBLE_THRESHOLD = 4 / 4;
  const VISIBLE_CLASS = "visible";

  const handleScroll = useCallback(() => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return;
    }

    const elements = (animateScrollRef.current = Array.from(
      document.querySelectorAll(".scroll-element")
    ));

    elements.forEach((element) => {
      const { top } = element.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowTop = window.scrollY + window.innerHeight * VISIBLE_THRESHOLD;

      if (top + scrollTop < windowTop) {
        element.classList.add(VISIBLE_CLASS);
      }
      // else {
      //   element.classList.remove(VISIBLE_CLASS);
      // }
    });
  }, [animateScrollRef, VISIBLE_THRESHOLD]);

  const [debouncedHandleScroll] = useDebounce(handleScroll, 200);

  useEffect(() => {
    window.addEventListener("scroll", debouncedHandleScroll);
    debouncedHandleScroll();

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [debouncedHandleScroll]);
};

export default useAnimateScroll;
