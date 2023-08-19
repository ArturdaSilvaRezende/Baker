import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, Disclosure } from "@headlessui/react";
import { FaPhone } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import * as C from "./style";
import "../../assets/style/animations.css";

interface DialogType {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (props: boolean) => void;
}

const HeaderDialog = (props: DialogType) => {
  const [isCaret, setIsCaret] = useState(false);

  const isHandlePage = () => {
    setIsCaret(!isCaret);
  };

  return (
    <Dialog
      as="div"
      open={props.mobileMenuOpen}
      onClose={props.setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />

      <C.NavbarPanel className="header__dialog fadeIn duration-1000">
        <div className="header__dialog-logo">
          <Link to="/">
            <span className="sr-only">Baker</span>
            Baker
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => props.setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <AiOutlineClose />
          </button>
        </div>
        <div className="header__dialog-contents">
          <div className="header__dialog-container">
            <div className="header__dialog-items">
              <Link to="/" className="header__dialog-link">
                Home
              </Link>
              <Link to="/about" className="header__dialog-link">
                About
              </Link>
              <Link to="/services" className="header__dialog-link">
                Services
              </Link>
              <Link to="/products" className="header__dialog-link">
                Products
              </Link>
              <Disclosure as="div" className="header__dialog-disclosure">
                {() => (
                  <>
                    <Disclosure.Button
                      className="disclosure__button"
                      onClick={() => isHandlePage()}
                    >
                      Pages
                      <span>
                        {isCaret ? <AiOutlineCaretUp /> : <AiFillCaretDown />}
                      </span>
                    </Disclosure.Button>
                    <Disclosure.Panel className="disclosure_panel fadeIn">
                      <Link to="/ourteam">Our Team</Link>
                      <Link to="/testimonial">Testimonial</Link>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <Link to="/contact" className="header__dialog-link">
                Contact
              </Link>
            </div>
            <div className="header__dialog-contactus">
              <div>
                <FaPhone />
              </div>
              <p>
                <span>Call Us</span>
                <span>+012 345 6789</span>
              </p>
            </div>
          </div>
        </div>
      </C.NavbarPanel>
    </Dialog>
  );
};

export default HeaderDialog;
