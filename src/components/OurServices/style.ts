import styled from "styled-components";
import tw from "twin.macro";

export const OurServices = styled.section`
  ${tw`container w-11/12 mx-auto flex justify-between relative mt-36 sm:mt-24 md:mt-24`}

  @media screen and (max-width: 992px) {
    ${tw`flex-col`}
  }
`;

export const OurServicesDescription = styled.div`
  width: 48%;

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 160px, 0);

  .ourservices__section {
    ${tw`uppercase font-bold text-base mb-4`}
    color: var(--primary);
  }

  .ourservices__title {
    ${tw`mt-2 mb-5 font-bold text-4xl`}
    font-family: "Playfair Display", serif;
  }

  .ourservices__description {
    ${tw`my-7 text-lg`}
    color: var(--secondary);
  }

  .ourservices__items {
    ${tw`grid grid-cols-2 gap-6`}

    .ourservices__item {
      h2 {
        ${tw`flex items-center`}

        span {
          &:first-child {
            ${tw`rounded-full relative mr-4`}
            background-color: var(--primary);
            width: 38px;
            height: 38px;

            svg {
              ${tw`text-white text-lg`}
              line-height: 19px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
          }

          &:last-child {
            ${tw`font-bold text-xl`}
            font-family: "Playfair Display", serif;
          }
        }
      }

      p {
        ${tw`mt-4 text-lg`}
        color: var(--secondary);
      }
    }
  }

  @media screen and (max-width: 992px) {
    ${tw`w-11/12 m-auto mb-16`}

    .ourservices__title {
      ${tw`text-4xl`}
    }
  }

  @media screen and (max-width: 599px) {
    ${tw`grid-cols-1`}

    .ourservices__items {
      ${tw`grid-cols-1`}
    }
  }
`;
