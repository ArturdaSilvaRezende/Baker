import { useEffect, useCallback, RefObject } from "react";

interface ClickOutsideType {
  isCaret: boolean;
  setIsCaret: (props: boolean) => void;
  caret: RefObject<HTMLElement>;
}

const useClickOutside = (props: ClickOutsideType) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        props.caret.current &&
        !props.caret.current.contains(event.target as Node)
      ) {
        props.setIsCaret(false);
      }
    },
    [props]
  );

  useEffect(() => {
    if (props.isCaret) {
      window.addEventListener("click", handleClickOutside);
    } else {
      window.removeEventListener("click", handleClickOutside);
    }

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [props.isCaret, handleClickOutside]);
};

export default useClickOutside;
