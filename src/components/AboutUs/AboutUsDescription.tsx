import { FaCheck } from "react-icons/fa";
import * as C from "./style";
import useAnimateScroll from "../../hooks/useAnimateScroll";

const AboutUsDescription = () => {
  useAnimateScroll();

  return (
    <C.AboutUsDescription className="scroll-element">
      <p className="about__section">About Us</p>
      <h1 className="about__title">
        We Bake Every Item From The Core Of Our Hearts
      </h1>
      <p className="about__description">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <p className="about__description">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <div className="about__check">
        <p>
          <span>
            <FaCheck />
          </span>
          <span>Quality Products</span>
        </p>
        <p>
          <span>
            <FaCheck />
          </span>
          <span>Custom Products</span>
        </p>
        <p>
          <span>
            <FaCheck />
          </span>
          <span>Online Order</span>
        </p>
        <p>
          <span>
            <FaCheck />
          </span>
          <span>Home Delivery</span>
        </p>
      </div>
      <button className="about__button">Read More</button>
    </C.AboutUsDescription>
  );
};

export default AboutUsDescription;
