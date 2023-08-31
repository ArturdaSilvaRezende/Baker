import styled from "styled-components";
import tw from "twin.macro";

export const ClientsReview = styled.section`
  ${tw`my-16`}
  background-color: var(--light);
`;

export const ClientsReviewContainer = styled.div`
  ${tw`container w-11/12 mx-auto`}

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 200px, 0);

  .swiper-slide-active {
    .mySwiper__item {
      background-color: var(--primary);
      ${tw`transition ease-in-out delay-150 duration-300`}
      h2,
      p {
        ${tw`font-bold`}
        color: var(--white);
      }

      .mySwiper__figure {
        .mySwiper__image {
          border: 2px solid var(--white);
        }

        figcaption {
          p {
            color: var(--white);
          }
        }
      }
    }
  }

  .mySwiper__item {
    ${tw` m-auto bg-white px-8 py-10 rounded-2xl`}

    .mySwiper__figure {
      ${tw`flex items-center`}

      .mySwiper__image {
        ${tw`p-1 rounded-full`}
        border: 1px solid var(--secondary);
        height: 68px;
        width: 68px;

        img {
          ${tw`rounded-full`}
        }
      }

      figcaption {
        ${tw`ml-5`}

        h2 {
          ${tw`font-bold`}
          font-family: "Playfair Display", serif;
          font-size: 20px;
        }

        p {
          color: var(--secondary);
        }
      }
    }

    .mySwiper__description {
      ${tw`mt-4`}
      color: var(--secondary);
    }
  }

  .ClientsButtons__contents {
    ${tw`flex justify-center mt-10`}

    button {
      ${tw`rounded-full duration-300`}
      background-color: var(--primary);
      height: 48px;
      width: 48px;

      & + button {
        ${tw`ml-5`}
      }

      &:hover {
        ${tw`text-white`}
        background-color: var(--dark);
      }

      svg {
        ${tw`m-auto text-3xl`}
      }
    }
  }
`;

export const ClientsReviewNewsletter = styled.div`
  ${tw`container w-11/12 mx-auto mt-24 rounded-md px-8 py-8 flex items-center justify-between 
  sm:flex-col sm:px-4 sm:py-4`}
  background-color: var(--primary);

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 150px, 0);

  h3 {
    ${tw`text-white font-bold text-5xl flex flex-col md:text-4xl
    sm:text-4xl sm:mb-5 sm:mr-auto`}
  }

  form {
    ${tw`w-5/12 sm:w-11/12 sm:mr-auto`}
    width: 50%;

    div {
      ${tw`py-3 px-3 rounded-md`}
      border: 1px solid var(--white);

      input {
        ${tw`py-2 outline-none font-medium`}
        background-color: transparent;
        width: 80%;

        &::placeholder {
          color: var(--dark);
        }
      }

      button {
        ${tw`py-2 text-white font-bold rounded-md`}
        background-color: var(--dark);
        width: 20%;
      }
    }
  }

  @media screen and (max-width: 599px) {
    form {
      width: 100%;

      div {
        input {
          width: 70%;
        }

        button {
          width: 30%;
        }
      }
    }
  }
`;
