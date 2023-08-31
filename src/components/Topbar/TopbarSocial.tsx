import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import * as C from "./style";

const TopbarSocial = () => {
  return (
    <C.TopbarSocial>
      <p>Follow us: </p>
      <ul>
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
    </C.TopbarSocial>
  );
};

export default TopbarSocial;
