import { FaPhone } from "react-icons/fa";
import * as C from "./style";

const BakeryProductsContact = () => {
  return (
    <C.BakeryProductsContact>
      <h2>The Best Bakery In Your City</h2>
      <div>
        <p>
          <FaPhone />
        </p>
        <p>
          <span>Call Us</span>
          <span>+012 345 6789</span>
        </p>
      </div>
    </C.BakeryProductsContact>
  );
};

export default BakeryProductsContact;
