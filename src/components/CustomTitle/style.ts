import styled from "styled-components";
import tw from "twin.macro";

export const CustomTitle = styled.div`
  ${tw`text-center py-24 sm:py-20`}

  p {
    ${tw`uppercase text-lg mb-2 font-medium`}
    color: var(--primary);
  }

  h1 {
    ${tw`font-bold text-5xl w-2/4 m-auto sm:text-2xl sm:w-11/12 md:text-4xl md:w-10/12 
    lg:w-8/12`}
    font-family: "Playfair Display", serif;
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    h1 {
      width: 60% !important;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 767px) {
    h1 {
      width: 70% !important;
    }
  }
`;
