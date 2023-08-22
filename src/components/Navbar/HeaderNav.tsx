import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { FaPhone } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import * as C from "./style";

interface MobileMenu {
  setMobileMenuOpen: (props: boolean) => void;
}

const HeaderNav = (props: MobileMenu) => {
  const [isCaret, setIsCaret] = useState(false);

  const isHandlePage = () => {
    setIsCaret(!isCaret);
  };

  return (
    <C.HeaderNav aria-label="Global">
      <div className="header__logo">
        <Link to="/">
          <span className="sr-only">Baker</span>
          Baker
        </Link>
        <div className="header__btn">
          <button type="button" onClick={() => props.setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <FaBars />
          </button>
        </div>
      </div>
      <div className="flex xl:hidden">
        <button type="button" onClick={() => props.setMobileMenuOpen(true)}>
          <span className="sr-only">Open main menu</span>
        </button>
      </div>
      <Popover.Group className="header__popover">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/about" className="header__link">
          About
        </Link>
        <Link to="/services" className="header__link">
          Services
        </Link>
        <Link to="/products" className="header__link">
          Products
        </Link>
        <Popover className="header__popover-contents">
          <Popover.Button
            className="header__popover-button"
            onClick={() => isHandlePage()}
          >
            Pages
            <span>{isCaret ? <AiOutlineCaretUp /> : <AiFillCaretDown />}</span>
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="header__popover-panel">
              <div className="p-4">
                <Link to="/ourteam">Our Team</Link>
                <Link to="/testimonial">Testimonial</Link>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <Link to="/contact" className="header__link">
          Contacts
        </Link>
      </Popover.Group>
      <div className="header__contactus">
        <div>
          <FaPhone />
        </div>
        <p>
          <span>Call Us</span>
          <span>+012 345 6789</span>
        </p>
      </div>
    </C.HeaderNav>
  );
};

export default HeaderNav;
