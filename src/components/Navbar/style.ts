import styled from "styled-components";
import tw from "twin.macro";
import { Dialog } from "@headlessui/react";

interface Props {
  $isvisiblemenu: boolean;
}

export const Navbar = styled.header<Props>`
  ${tw`duration-500`}
  background-color:  ${(props) =>
    props.$isvisiblemenu ? "var(--dark)" : "transparent"};
  padding: ${(props) => (props.$isvisiblemenu ? "10px 0" : "0")};
  position: ${(props) => (props.$isvisiblemenu ? "fixed" : "absolute")};
  left: 0;
  right: 0;
  top: ${(props) => (props.$isvisiblemenu ? "0" : "90px")};
  z-index: 998;

  @media screen and (max-width: 1024px) {
    padding: 10px 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    top: ${(props) => (props.$isvisiblemenu ? "0" : "90px")};
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    top: ${(props) => (props.$isvisiblemenu ? "0" : "20px")};
  }

  @media screen and (max-width: 599px) {
    top: ${(props) => (props.$isvisiblemenu ? "0" : "10px")};
  }
`;

export const HeaderNav = styled.nav`
  ${tw`flex max-w-7xl items-center justify-between container m-auto`}

  .header__logo {
    ${tw`flex xl:flex-1 w-full`}
    position: relative;
    top: -5px;
    color: var(--primary);

    a {
      font-family: "Playfair Display", serif;
      font-size: 3rem;
      font-weight: 700;
    }

    .header__btn {
      ${tw`flex xl:hidden ml-auto mt-3`}

      button {
        svg {
          font-size: 1.4rem;
        }
      }
    }
  }

  .header__popover {
    ${tw`hidden xl:flex xl:gap-x-10 mt-3`}

    .header__popover-contents {
      ${tw`relative`}

      .header__popover-button {
        ${tw`flex items-center gap-x-1 text-sm  leading-6 text-white`}
        transition: 0.4s ease;

        &:hover {
          color: var(--primary);
        }
      }

      .header__popover-panel {
        ${tw`absolute -left-8 top-full z-10 mt-3 overflow-hidden rounded-2xl 
      bg-white shadow-lg ring-1 ring-gray-900/5`}

        div {
          ${tw`flex flex-col`}

          a {
            ${tw`text-gray-700`}
            transition: 0.4s ease;

            & + a {
              margin-top: 10px;
            }

            &:hover {
              color: var(--primary);
            }
          }
        }
      }
    }
  }

  .header__link {
    ${tw`text-sm leading-6 text-white`}
    transition: 0.4s ease;

    &:hover {
      color: var(--primary);
    }
  }

  .header__contactus {
    ${tw`hidden xl:flex xl:flex-1 xl:justify-end items-center`}

    div {
      ${tw`mr-3 border border-white p-3 rounded-full`}

      svg {
        color: var(--primary);
        font-size: 1.1rem;
      }
    }

    p {
      ${tw`flex flex-col`}

      span {
        &:first-child {
          color: var(--primary);
        }

        &:last-child {
          ${tw`text-white`}
          font-size: 1em;
        }
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    .header__logo {
      .header__btn {
        button {
          svg {
            font-size: 2rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 599px) {
    z-index: -1;

    .header__logo {
      a {
        font-size: 2rem;
      }
    }
  }
`;

export const NavbarPanel = styled(Dialog.Panel)`
  z-index: 999;

  ${tw`fixed inset-y-0 right-0 w-full overflow-y-auto bg-white px-5 py-2 
    md:max-w-sm md:ring-1 md:ring-gray-900/10`}

  .header__dialog-logo {
    ${tw`flex items-center justify-between`}

    a {
      ${tw`-m-1.5`}
      color: var(--primary);
      font-family: "Playfair Display", serif;
      font-size: 3rem;
      font-weight: 700;
    }

    button {
      ${tw`mt-2`}
      svg {
        font-size: 1.7rem;
      }
    }
  }

  .header__dialog-contents {
    ${tw`mt-6 flow-root`}

    .header__dialog-container {
      ${tw`-my-6 divide-y divide-gray-500/10`}

      .header__dialog-items {
        ${tw`space-y-2 py-6`}

        .header__dialog-disclosure {
          ${tw`-mx-3`}

          .disclosure__button {
            ${tw`flex items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base 
            font-semibold leading-7 text-gray-900 hover:bg-gray-50`}
          }

          .disclosure_panel {
            ${tw`mt-2 space-y-2 flex flex-col p-3 rounded-2xl`}
            background-color: var(--primary);

            a {
              ${tw`font-bold`}
            }
          }
        }

        .header__dialog-link {
          ${tw`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 
          text-gray-900 hover:bg-gray-50`}
        }
      }

      .header__dialog-contactus {
        ${tw`flex items-center`}

        div {
          ${tw`mr-5 p-4 rounded-full`}
          border: 2px solid var(--primary);

          svg {
            color: var(--primary);
            font-size: 1.2rem;
          }
        }

        p {
          ${tw`flex flex-col`}
          font-weight: 700;

          span {
            &:first-child {
              color: var(--primary);
            }

            &:last-child {
              ${tw`text-gray-900`}
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
`;
