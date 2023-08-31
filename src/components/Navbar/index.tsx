import { useState, useEffect } from "react";
import HeaderNav from "./HeaderNav";
import HeaderDialog from "./HeaderDialog";
import * as C from "./style";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisibleHeader(true);
    } else {
      setIsVisibleHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <C.Navbar $isvisiblemenu={isVisibleHeader}>
      <HeaderNav setMobileMenuOpen={setMobileMenuOpen} />
      <HeaderDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </C.Navbar>
  );
};

export default Navbar;
