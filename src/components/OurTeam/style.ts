import styled from "styled-components";
import tw from "twin.macro";

export const OurTeam = styled.section`
  ${tw`container w-11/12 mx-auto mt-24 md:mt-5 sm:mt-5`}

  @media screen and (max-width: 599px) {
    ${tw`mt-1`}
  }
`;

export const OurTeamContents = styled.div`
  ${tw`flex justify-center flex-wrap gap-4`}

  opacity: 0;
  transition: 0.9s;
  transform: translate3d(0, 200px, 0);

  figure {
    ${tw`rounded-b-lg relative pb-24`}
    background-color: var(--light);
    width: 24%;

    button {
      ${tw`rounded-full duration-300`}
      background-color: var(--primary);
      border: 3px solid var(--white);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 40px;
      width: 40px;
      z-index: 20;

      &:hover {
        border: 3px solid var(--primary);
      }

      svg {
        ${tw`m-auto`}
        font-size: 18px;
      }
    }

    img {
      ${tw`rounded-t-lg relative`}
      z-index: 3;
    }

    figcaption {
      ${tw`px-5 py-5 text-center w-full`}
      position: absolute;
      bottom: 0;
      z-index: 2;

      h2 {
        ${tw`font-bold text-2xl mb-1`}
        font-family: "Playfair Display", serif;
      }

      p {
        color: var(--secondary);
      }
    }

    .ourteam__social {
      ${tw`rounded-b-lg`}
      background-color: var(--primary);
      height: 100px;

      ul {
        ${tw`flex`}
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        li {
          ${tw`bg-white rounded-full relative`}
          cursor: pointer;
          height: 38px;
          width: 38px;

          & + li {
            ${tw`ml-2`}
          }

          svg {
            ${tw`duration-300`}
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    figure {
      ${tw`w-5/12`}
    }
  }

  @media screen and (max-width: 599px) {
    ${tw`flex-col`}

    figure {
      ${tw`w-11/12 m-auto`}
    }
  }
`;
