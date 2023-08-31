import styled from "styled-components";
import tw from "twin.macro";

export const ButtonBackToTop = styled.div`
  ${tw`rounded-full text-center`}
  background-color: var(--primary);
  cursor: pointer;
  line-height: 52px;
  height: 40px;
  width: 40px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 999;

  button {
    ${tw`relative text-white duration-300`}

    svg {
      ${tw`text-2xl`}
    }

    &:hover {
      ${tw`text-black`}
    }
  }
`;
