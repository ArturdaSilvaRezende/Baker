import styled from "styled-components";
import tw from "twin.macro";

export const AboutUs = styled.section`
  ${tw`container mx-auto flex relative my-36`}

  @media screen and (max-width: 992px) {
    ${tw`flex-col`}
  }
`;

export const AboutUsDescription = styled.div`
  ${tw`flex w-3/6 flex-col`}

  .about__section {
    ${tw`text-2xl mb-4`}
    color: var(--primary);
  }

  .about__title {
    ${tw`font-bold text-5xl mb-4`}
    font-family: "Playfair Display", serif;
    line-height: 1.3;
  }

  .about__description {
    ${tw`w-11/12 text-lg mb-4`}
    color: var(--secondary);
  }

  .about__check {
    ${tw`grid grid-cols-2 gap-y-2.5`}

    p {
      ${tw`flex items-center`}
      color: var(--secondary);

      svg {
        color: var(--primary);
        ${tw`mr-2`}
      }
    }
  }

  .about__button {
    ${tw`mt-5 p-4 text-white w-48 font-bold duration-1000`}
    background-color: var(--primary);
    border-radius: 40px;

    &:hover {
      background-color: rgba(255, 195, 0, 0.5);
      color: var(--primary);
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`w-11/12 m-auto mt-24`}

    .about__title {
      ${tw`w-11/12 `}
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`w-11/12 m-auto mt-16`}

    .about__title {
      ${tw`text-2xl`}
    }
  }
`;
