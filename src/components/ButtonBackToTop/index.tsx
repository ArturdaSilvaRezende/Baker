import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import * as C from "./style";
import "./animation.css";

const ButtonBackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <C.ButtonBackToTop
      onClick={scrollToTop}
      className={isVisible ? "zoomInDown" : "zoomOutDown"}
    >
      <button>
        <FaArrowUp />
      </button>
    </C.ButtonBackToTop>
  );
};

export default ButtonBackToTop;
