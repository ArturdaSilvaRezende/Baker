import styled from "styled-components";
import tw from "twin.macro";

export const AnimatedCounter = styled.section`
  ${tw`container m-auto mt-32 mb-24`}
`;

export const AnimatedCounterContainer = styled.div`
  ${tw`container w-auto flex justify-evenly gap-2.5 `}

  .AnimatedCounter__item {
    ${tw`text-center p-5 rounded-2xl w-1/4`}
    background-color: var(--light);

    p {
      ${tw`my-5`}
      font-weight: 500;

      svg {
        ${tw`m-auto`}
        color: var(--primary);
        font-size: 5rem;
      }
    }

    h2 {
      font-size: 3rem;
      font-weight: 700;
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    ${tw`gap-5 justify-center flex-wrap`}

    .AnimatedCounter__item {
      ${tw`w-5/12`}
    }
  }

  @media screen and (max-width: 599px) {
    ${tw`flex-col`}

    .AnimatedCounter__item {
      ${tw`w-11/12 m-auto`}
    }
  }
`;
