import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import * as C from "./style";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

//carousel images
import Carousel01 from "../../../assets/img/carousel-1.jpg";
import Carousel02 from "../../../assets/img/carousel-2.jpg";

const Hero = () => {
  return (
    <>
      <C.Hero>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            clickable: false,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <figure>
              <div className="hero__overflow"></div>
              <img src={Carousel01} alt="hero-image-01" />
              <figcaption>
                <p>The Best Bakery</p>
                <h2>
                  We Bake With <span>Passion</span>
                </h2>
                <p className="hero__description">
                  Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam
                  rebum ipsum
                </p>
                <button>Read More</button>
              </figcaption>
            </figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure>
              <div className="hero__overflow"></div>
              <img src={Carousel02} alt="hero-image-02" />
              <figcaption>
                <p>The Best Bakery</p>
                <h2>
                  We Bake With <span>Passion</span>
                </h2>
                <p className="hero__description">
                  Vero elitr justo clita lorem. Ipsum dolor sed stet sit diam
                  rebum ipsum
                </p>
                <button>Read More</button>
              </figcaption>
            </figure>
          </SwiperSlide>
        </Swiper>
        <C.HeroButtonsContainer>
          <div className="HeroButtons__contents">
            <button className="image-swiper-button-prev">
              <IoIosArrowBack />
            </button>
            <button className="image-swiper-button-next">
              <IoIosArrowForward />
            </button>
          </div>
        </C.HeroButtonsContainer>
      </C.Hero>
    </>
  );
};

export default Hero;
