import FooterAddress from "./FooterAddress";
import FooterCopyright from "./FooterCopyright";
import FooterPhotoGallery from "./FooterPhotoGallery";
import FooterQuickLinks from "./FooterQuickLinks";
import * as C from "./style";

const Footer = () => {
  return (
    <C.Footer>
      <C.FooterContainer>
        <FooterAddress />
        <FooterQuickLinks />
        <FooterPhotoGallery />
      </C.FooterContainer>
      <FooterCopyright />
    </C.Footer>
  );
};

export default Footer;
