import useAnimateScroll from "../../hooks/useAnimateScroll";
import About01 from "../../assets/img/about-1.jpg";
import About02 from "../../assets/img/about-2.jpg";
import * as C from "../../assets/style/ImgTwice/style";

const AboutUsImages = () => {
  useAnimateScroll();

  return (
    <C.ImgTwice className="scroll-element">
      <img src={About01} alt="about-01" />
      <div className="ImgTwiceBg"></div>
      <img src={About02} alt="about-02" />
    </C.ImgTwice>
  );
};

export default AboutUsImages;
