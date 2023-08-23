import Services01 from "../../assets/img/service-1.jpg";
import Services02 from "../../assets/img/service-2.jpg";
import * as C from "../../assets/style/ImgTwice/style";

const OurServicesImages = () => {
  return (
    <C.ImgTwice>
      <img src={Services01} alt="services-01" />
      <div className="ImgTwiceBg"></div>
      <img src={Services02} alt="services-02" />
    </C.ImgTwice>
  );
};

export default OurServicesImages;
