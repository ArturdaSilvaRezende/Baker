import { useState } from "react";
import HeaderNav from "./HeaderNav";
import HeaderDialog from "./HeaderDialog";
import * as C from "./style";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <C.Navbar>
      <HeaderNav setMobileMenuOpen={setMobileMenuOpen} />
      <HeaderDialog
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </C.Navbar>
  );
};

export default Navbar;
