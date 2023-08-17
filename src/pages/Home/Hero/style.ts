import styled from "styled-components";
import tw from "twin.macro";

export const Hero = styled.section`
  position: relative;

  .swiper-pagination {
    display: none;
  }

  .mySwiper {
    figure {
      height: 100vh;
      z-index: -1;
      position: relative;

      .hero__overflow {
        background-color: rgba(0, 0, 0, 0.7);
        position: absolute;
        inset: 0;
        z-index: 1;
      }

      img {
        height: 100vh;
      }

      figcaption {
        ${tw`container pl-8`}
        margin-top: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 2;

        p {
          &:first-child {
            color: var(--primary);
            font-size: 2rem;
            font-weight: 700;
          }
        }

        h2 {
          color: var(--light);
          font-family: "Playfair Display", serif;
          font-size: 5rem;
          font-weight: 700;
          width: 50%;

          span {
            position: relative;
            top: -40px;
          }
        }

        .hero__description {
          color: var(--light);
          font-size: 1.3rem;
          margin-top: -35px;
        }

        button {
          background-color: var(--primary);
          border-radius: 20px;
          margin-top: 40px;
          padding: 10px;
          transition: 0.4s ease;
          width: 120px;

          &:hover {
            background-color: var(--light);
            color: var(--dark);
          }
        }
      }
    }
  }

  @media screen and (min-width: 993px) and (max-width: 1024px) {
    .mySwiper {
      figure {
        figcaption {
          ${tw`pl-4`}
          width: 90%;

          h2 {
            font-size: 4rem;
            width: 100%;

            span {
              position: static;
            }
          }

          .hero__description {
            margin-top: 10px;
            width: 50%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .mySwiper {
      figure {
        height: 50vh;

        img {
          height: 50vh;
        }

        figcaption {
          ${tw`pl-6`}
          margin-top: 30px;
          width: 90%;

          h2 {
            font-size: 3.5rem;
            width: 100%;

            span {
              position: static;
            }
          }

          .hero__description {
            margin-top: 0;
            width: 60%;
          }

          button {
            margin-top: 20px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .mySwiper {
      figure {
        height: 50vh;

        img {
          height: 50vh;
        }

        figcaption {
          ${tw`pl-5`}
          width: 100%;

          h2 {
            font-size: 2.4rem;
            margin: 10px 0;
            width: 100%;

            span {
              position: static;
            }
          }

          .hero__description {
            margin-top: 0;
            width: 80%;
          }

          button {
            margin-top: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    .mySwiper {
      figure {
        height: 50vh;

        img {
          height: 50vh;
        }

        figcaption {
          ${tw`pl-5`}
          margin-top: 15px;

          p {
            &:first-child {
              font-size: 1.3rem;
            }
          }

          h2 {
            font-size: 1.4rem;
            margin: 5px 0;
            width: 100%;

            span {
              position: static;
            }
          }

          .hero__description {
            font-size: 0.8rem;
            margin-top: 0;
            width: 80%;
          }

          button {
            margin-top: 10px;
            padding: 5px;
          }
        }
      }
    }
  }
`;

export const HeroButtonsContainer = styled.div`
  position: absolute;
  bottom: -39px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  z-index: 2;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--light);
    transform: rotate(45deg);
  }

  .HeroButtons__contents {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    button {
      color: var(--primary);
      transition: 0.4s ease;
      position: absolute;

      &:first-child {
        top: 50%;
        left: -50px;
        transform: translateY(-50%);
      }

      &:last-child {
        top: 50%;
        left: -15px;
        transform: translateY(-50%);
      }

      &:hover {
        color: var(--secondary);
      }

      svg {
        font-size: 4rem;
      }
    }
  }

  @media screen and (max-width: 599px) {
    bottom: -20px;
    height: 40px;
    width: 40px;

    .HeroButtons__contents {
      button {
        &:first-child {
          left: -30px;
        }

        &:last-child {
          left: -10px;
        }

        svg {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
