import { useState } from "react";
import useAnimateScroll from "../../hooks/useAnimateScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";
import ClientsReviewList from "./ClientsReviewList";
import * as C from "./style";

const ClientsReviewContainer = () => {
  const [clientsList] = useState(ClientsReviewList);
  useAnimateScroll();

  return (
    <C.ClientsReviewContainer className="scroll-element">
      <Swiper
        className="mySwiper"
        spaceBetween={30}
        loop
        navigation={{
          nextEl: ".clientsButtonNext",
          prevEl: ".clientsButtonPrev",
          disabledClass: "swiper-button-disabled",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
      >
        {clientsList.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="mySwiper__item">
              <figure className="mySwiper__figure">
                <div className="mySwiper__image">
                  <img src={item.img} alt={item.client} />
                </div>

                <figcaption>
                  <h2>{item.client}</h2>
                  <p>{item.profession}</p>
                </figcaption>
              </figure>
              <p className="mySwiper__description">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam et eos. Clita erat ipsum et lorem et sit.
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="ClientsButtons__contents">
        <button className="clientsButtonPrev">
          <BsChevronLeft />
        </button>
        <button className="clientsButtonNext">
          <BsChevronRight />
        </button>
      </div>
    </C.ClientsReviewContainer>
  );
};

export default ClientsReviewContainer;
