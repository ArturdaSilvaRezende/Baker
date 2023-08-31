import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  $isactiveitem: boolean;
}

export const BakeryProducts = styled.section`
  background-color: var(--light);
`;

export const BakeryProductsContainer = styled.div`
  ${tw`container w-11/12 mx-auto mt-36 sm:pb-7 md:pb-3`}
`;

export const BakeryProductsContact = styled.div`
  ${tw`flex items-center justify-between py-12 px-9 rounded-2xl`}
  background-color: var(--primary);

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 200px, 0);

  h2 {
    ${tw`text-white text-6xl font-bold w-1/2`}
    font-family: 'Playfair Display', serif;
  }

  div {
    ${tw`flex items-center text-white font-bold`}

    p {
      &:first-child {
        ${tw`mr-5`}

        svg {
          ${tw`text-6xl`}
        }
      }

      &:last-child {
        ${tw`flex flex-col`}

        span {
          &:first-child {
            ${tw`text-2xl`}
          }

          &:last-child {
            ${tw`text-4xl`}
          }
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    ${tw`px-8 py-10`}

    h2 {
      ${tw`text-3xl`}
    }

    div {
      p {
        &:last-child {
          span {
            &:last-child {
              ${tw`text-3xl`}
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`flex-col px-2 py-5 text-left`}

    h2 {
      ${tw`text-3xl w-11/12 mb-5`}
    }

    div {
      ${tw`w-11/12`}

      p {
        &:first-child {
          ${tw`mr-3`}

          svg {
            ${tw`text-4xl`}
          }
        }

        &:last-child {
          span {
            &:last-child {
              ${tw`text-3xl`}
            }
          }
        }
      }
    }
  }
`;

export const ProductsCategoryContents = styled.div`
  ${tw`flex gap-3.5 pb-24 sm:flex-wrap`}

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 120px, 0);
`;

export const CategoryFigure = styled.figure<Props>`
  ${tw`rounded-t-lg text-center shadow-xl sm:m-auto`}

  background-color: ${(props) =>
    +props.$isactiveitem ? "var(--primary)" : "var(--white)"};

  & + figure {
    ${tw`sm:mt-24`}
  }

  .category__buttons {
    ${tw`pt-6 pb-5 px-3`}

    button {
      ${tw`w-2/5 p-1 rounded `}

      background-color: ${(props) =>
        +props.$isactiveitem ? "var(--white)" : "var(--primary)"};

      & + button {
        ${tw`ml-3`}
      }

      svg {
        ${tw`m-auto`}
      }
    }
  }

  figcaption {
    color: ${(props) =>
      +props.$isactiveitem ? "var(--white)" : "var(--dark)"};

    p {
      &:first-child {
        ${tw`p-2 w-40 m-auto mt-1`}

        border-radius: 30px;
        border: 1px solid
          ${(props) =>
            +props.$isactiveitem ? "var(--white)" : "var(--primary)"};
      }

      &:last-child {
        ${tw`mb-5 m-auto w-10/12`}
      }
    }

    h3 {
      ${tw`font-bold my-5 text-3xl`}

      font-family: 'Playfair Display', serif;
    }
  }

  img {
    ${tw`rounded-b-lg`}
  }

  .category__image {
    ${tw`relative`}

    .category__link {
      ${tw`rounded-b-lg flex items-center justify-center`}
      background-color: rgba(0, 0, 0, 0.6);
      position: absolute;
      inset: 0;
      z-index: 10;

      a {
        ${tw`text-black w-28 p-2 duration-1000`}
        background-color: var(--primary);
        border-radius: 30px;

        &:hover {
          ${tw`bg-white`}
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    height: 60vh;
  }

  @media screen and (max-width: 599px) {
    height: 70vh;
  }
`;
