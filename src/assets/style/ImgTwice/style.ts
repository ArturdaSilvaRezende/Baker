import styled from "styled-components";
import tw from "twin.macro";

export const ImgTwice = styled.div`
  ${tw`flex w-3/6 relative`}

  img {
    ${tw`rounded-2xl relative`}
    width: 40%;
    height: 370px;

    &:first-child {
      left: 50px;
    }

    &:last-child {
      left: 90px;
      top: 150px;
    }
  }

  .ImgTwiceBg {
    &::before {
      content: " ";
      background: var(--primary);
      border: 25px solid var(--light);
      border-radius: 6px;
      height: 60vh;
      position: absolute;
      left: 10%;
      top: 50%;
      transform: translateY(-50%);
      width: 60%;
      z-index: -1;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 992px) {
    ${tw`justify-between w-11/12 m-auto`}

    img {
      ${tw`static`}
      width: 47%;
    }

    .ImgTwiceBg {
      &::before {
        height: 30vh;
        width: 80%;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .ImgTwiceBg {
      &::before {
        height: 20vh !important;
      }
    }
  }

  @media screen and (max-width: 767px) {
    ${tw`justify-between w-11/12 m-auto`}

    img {
      ${tw`static`}
      height: 250px;
      width: 47%;
    }

    .ImgTwiceBg {
      &::before {
        height: 30vh;
        width: 80%;
      }
    }
  }

  @media screen and (max-width: 280px) {
    .ImgTwiceBg {
      &::before {
        height: 27vh !important;
      }
    }
  }
`;
