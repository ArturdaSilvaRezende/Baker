import styled from "styled-components";
import tw from "twin.macro";

export const Footer = styled.footer`
  ${tw`py-8 mt-24 text-white`}
  background-color: var(--dark);

  h2 {
    ${tw`font-bold text-2xl mb-5`}
    font-family: 'Playfair Display', serif;
  }
`;

export const FooterContainer = styled.div`
  ${tw`container w-11/12 mx-auto grid grid-cols-3 
  sm:grid-cols-1 sm:text-center`}

  @media screen and (min-width: 600px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
`;

export const FooterAddress = styled.div`
  ${tw`sm:m-auto`}
  .FooterAddress__item {
    & + .FooterAddress__item {
      ${tw`mt-3`}
    }

    p {
      ${tw`flex items-center`}

      span {
        &:first-child {
          ${tw`mr-4`}
        }
      }
    }
  }

  .FooterAddress__social {
    ${tw`flex mt-5`}

    li {
      ${tw`border-solid border-2 border-white rounded-full text-center duration-300`}
      cursor: pointer;
      line-height: 32px;
      height: 40px;
      width: 40px;

      & + li {
        ${tw`ml-2`}
      }

      &:hover {
        color: var(--primary);
        border: 2px solid var(--primary);
      }

      svg {
        display: inline;
      }
    }
  }
`;

export const FooterQuickLinks = styled.div`
  ${tw`w-8/12 xl:mx-auto md:m-auto sm:my-12 sm:w-full`}

  nav {
    ${tw`sm:m-auto sm:w-5/12`}

    ul {
      li {
        & + li {
          ${tw`mt-2`}
        }

        a {
          ${tw`flex items-center duration-300`}
          width: 120px;

          &:hover {
            color: var(--primary);
          }

          span {
            &:first-child {
              ${tw`mr-1`}
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    ${tw`bg-red-500 py-3 rounded-md`}
  }
`;

export const FooterPhotoGallery = styled.div`
  ${tw`text-right sm:text-center`}

  .PhotoGallery__container {
    ${tw`flex flex-wrap gap-1 justify-end sm:justify-center`}

    div {
      ${tw`rounded-md p-1`}
      border: 3px solid var(--white);

      img {
        width: 90px;
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    .PhotoGallery__container {
      div {
        img {
          width: 60px;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .PhotoGallery__container {
      width: 50vw;
    }
  }
`;

export const FooterCopyright = styled.div`
  ${tw`text-center mt-32`}

  div {
    span,
    a {
      ${tw`font-bold duration-300`}
      color: var(--primary);
    }

    a {
      &:hover {
        color: var(--white);
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    ${tw`w-6/12 mx-auto mt-16`}
  }

  @media screen and (max-width: 599px) {
    ${tw`w-9/12 mx-auto mt-16`}
  }
`;
