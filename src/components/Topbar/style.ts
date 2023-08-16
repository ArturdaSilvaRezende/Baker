import styled from "styled-components";
import tw from "twin.macro";

export const Topbar = styled.div`
  ${tw`p-4 relative`}
  background-color: var(--dark);

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TopbarContainer = styled.div`
  ${tw`container flex items-center justify-between mx-auto`}

  nav {
    ul {
      ${tw`flex items-center`}

      li {
        cursor: pointer;
      }
    }
  }
`;

export const TopbarBreadcrumb = styled.nav`
  ul {
    li {
      ${tw`text-white`}
      font-size: 14px;

      & + li {
        ${tw`ml-4`}

        &::before {
          content: "/";
          ${tw`mr-4`}
        }
      }
    }
  }
`;

export const TopbarSocial = styled.nav`
  ${tw`flex mr-2`}

  p {
    ${tw`text-white mr-5`}
    font-size: 14px;
  }
  ul {
    li {
      color: var(--primary);

      & + li {
        ${tw`pl-4 ml-3`};

        &:after {
          content: "";
          ${tw`text-white absolute top-0 bottom-0`};
          border-right: 1px solid var(--light);
          margin-left: -15px;
        }
      }
    }
  }
`;
