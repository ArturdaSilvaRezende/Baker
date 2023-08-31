import styled from "styled-components";
import tw from "twin.macro";
import BreadcrumbImg from "../../assets/img/carousel-1.jpg";

export const Breadcrumb = styled.div`
  ${tw`px-5 pt-24 pb-16`}
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${BreadcrumbImg}) center center no-repeat;
  background-size: cover;
  max-height: 500px;
  z-index: -1;

  .breadcrumb__container {
    ${tw`text-center mt-36`}
    z-index: 1;

    h1 {
      ${tw`text-white font-bold text-6xl`}
      font-family: 'Playfair Display', serif;
    }

    ul {
      ${tw`flex justify-center mt-5`}

      li {
        ${tw`text-white`}
      }

      .breadcrumb__active {
        color: var(--primary);

        &::before {
          ${tw`text-white mx-3`}
          content: "/";
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .breadcrumb__container {
      ${tw`mt-16`}
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    ${tw`pb-16`}

    .breadcrumb__container {
      ${tw`mt-16 mb-8`}
    }
  }

  @media screen and (max-width: 599px) {
    ${tw`pb-10`}

    .breadcrumb__container {
      ${tw`mt-6 mb-8`}

      h1 {
        ${tw`text-5xl`}
      }
    }
  }
`;
