import Product01 from "../../assets/img/product-1.jpg";
import Product02 from "../../assets/img/product-2.jpg";
import Product03 from "../../assets/img/product-3.jpg";
import Team01 from "../../assets/img/team-1.jpg";
import Team02 from "../../assets/img/team-2.jpg";
import Team03 from "../../assets/img/team-3.jpg";
import * as C from "./style";

const FooterPhotoGallery = () => {
  return (
    <C.FooterPhotoGallery>
      <h2>Photo Gallery</h2>

      <div className="PhotoGallery__container">
        <div>
          <img src={Product01} alt="product 01" />
        </div>
        <div>
          <img src={Product02} alt="product 02" />
        </div>
        <div>
          <img src={Product03} alt="product 03" />
        </div>
        <div>
          <img src={Team01} alt="team 01" />
        </div>
        <div>
          <img src={Team02} alt="team 02" />
        </div>
        <div>
          <img src={Team03} alt="team 03" />
        </div>
      </div>
    </C.FooterPhotoGallery>
  );
};

export default FooterPhotoGallery;
