import AnimateCounterCounterUp from "./AnimateCounterCounterUp";
import { FaCertificate } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBreadSlice } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import * as C from "./style";

const AnimatedCounterContents = () => {
  return (
    <C.AnimatedCounter>
      <C.AnimatedCounterContainer>
        <div className="AnimatedCounter__item">
          <p>
            <FaCertificate />
          </p>
          <p>Years Experience</p>
          <AnimateCounterCounterUp finalValue={50} />
        </div>

        <div className="AnimatedCounter__item">
          <p>
            <FaUsers />
          </p>
          <p>Skilled Professionals</p>
          <AnimateCounterCounterUp finalValue={175} />
        </div>

        <div className="AnimatedCounter__item">
          <p>
            <FaBreadSlice />
          </p>
          <p>Total Products</p>
          <AnimateCounterCounterUp finalValue={135} />
        </div>

        <div className="AnimatedCounter__item">
          <p>
            <FaCartPlus />
          </p>
          <p>Order Everyday</p>
          <AnimateCounterCounterUp finalValue={9357} />
        </div>
      </C.AnimatedCounterContainer>
    </C.AnimatedCounter>
  );
};

export default AnimatedCounterContents;
