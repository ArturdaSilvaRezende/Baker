import { FaBreadSlice } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import * as C from "./style";

const OurServicesDescription = () => {
  return (
    <C.OurServicesDescription>
      <p className="ourservices__section">Our Services</p>
      <h1 className="ourservices__title">What Do We Offer For You?</h1>
      <p className="ourservices__description">
        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam
        amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
        clita duo justo magna dolore erat amet
      </p>
      <div className="ourservices__items">
        <div className="ourservices__item">
          <h2>
            <span>
              <FaBreadSlice />
            </span>
            <span>Quality Products</span>
          </h2>
          <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
        </div>

        <div className="ourservices__item">
          <h2>
            <span>
              <FaBirthdayCake />
            </span>
            <span>Custom Products</span>
          </h2>
          <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
        </div>

        <div className="ourservices__item">
          <h2>
            <span>
              <FaCartPlus />
            </span>
            <span>Online Order</span>
          </h2>
          <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
        </div>

        <div className="ourservices__item">
          <h2>
            <span>
              <FaTruck />
            </span>
            <span>Home Delivery</span>
          </h2>
          <p>Magna sea eos sit dolor, ipsum amet ipsum lorem diam eos</p>
        </div>
      </div>
    </C.OurServicesDescription>
  );
};

export default OurServicesDescription;
