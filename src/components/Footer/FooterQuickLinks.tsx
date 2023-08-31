import { Link } from "react-router-dom";
import { BiSolidChevronRight } from "react-icons/bi";
import * as C from "./style";

const FooterQuickLinks = () => {
  return (
    <C.FooterQuickLinks>
      <h2>Quick Links</h2>
      <nav>
        <ul>
          <li>
            <Link to="/about" target="_blank">
              <span>
                <BiSolidChevronRight />
              </span>
              <span> About Us</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" target="_blank">
              <span>
                <BiSolidChevronRight />
              </span>
              <span> Contact Us</span>
            </Link>
          </li>
          <li>
            <Link to="/services" target="_blank">
              <span>
                <BiSolidChevronRight />
              </span>
              <span> Our Services</span>
            </Link>
          </li>
          <li>
            <Link to="/products" target="_blank">
              <span>
                <BiSolidChevronRight />
              </span>
              <span> Our Products</span>
            </Link>
          </li>
          <li>
            <Link to="/ourteam" target="_blank">
              <span>
                <BiSolidChevronRight />
              </span>
              <span> Our Team</span>
            </Link>
          </li>
        </ul>
      </nav>
    </C.FooterQuickLinks>
  );
};

export default FooterQuickLinks;
