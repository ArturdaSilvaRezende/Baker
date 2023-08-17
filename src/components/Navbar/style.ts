import styled from "styled-components";
import tw from "twin.macro";
import { Dialog } from "@headlessui/react";

export const Navbar = styled.header`
  ${tw`px-4`}
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 90px;
  width: 100%;
  z-index: 998;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    top: 80px;
  }

  @media screen and (min-width: 600px) and (max-width: 767px) {
    top: 15px;
  }

  @media screen and (max-width: 599px) {
    top: 10px;
  }
`;

export const HeaderNav = styled.nav`
  ${tw`flex max-w-7xl items-center justify-between container m-auto`}

  .header__logo {
    ${tw`flex lg:flex-1 w-full`}

    color: var(--primary);

    a {
      font-family: "Playfair Display", serif;
      font-size: 3rem;
      font-weight: 700;
    }

    .header__btn {
      ${tw`flex lg:hidden ml-auto mt-3`}

      button {
        svg {
          font-size: 1.4rem;
        }
      }
    }
  }

  .header__popover {
    ${tw`hidden lg:flex lg:gap-x-12 mt-5`}

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
    ${tw`hidden lg:flex lg:flex-1 lg:justify-end items-center`}

    div {
      ${tw`mr-5 border border-white p-4 rounded-full`}

      svg {
        color: var(--primary);
        font-size: 1.2rem;
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
          font-size: 1.2rem;
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
    sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}

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
