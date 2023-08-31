import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import * as C from "./style";

const FooterAddress = () => {
  return (
    <C.FooterAddress>
      <h2>Office Address</h2>
      <address className="FooterAddress__item">
        <p>
          <span>
            <FaMapMarkerAlt />
          </span>
          <span>123 Street, New York, USA</span>
        </p>
      </address>
      <div className="FooterAddress__item">
        <p>
          <span>
            <FaPhone />
          </span>
          <span>+012 345 67890</span>
        </p>
      </div>
      <div className="FooterAddress__item">
        <p>
          <span>
            <FaEnvelope />
          </span>
          <span>info@example.com</span>
        </p>
      </div>
      <ul className="FooterAddress__social">
        <li>
          <FaFacebookF />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaInstagram />
        </li>
      </ul>
    </C.FooterAddress>
  );
};

export default FooterAddress;
