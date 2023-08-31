import styled from "styled-components";
import tw from "twin.macro";

export const ContactForm = styled.form`
  .contact__container {
    ${tw`container w-9/12 mx-auto sm:w-11/12`}

    .contact__item {
      ${tw`mt-5 w-full`}

      label {
        ${tw`font-bold`}
      }

      input,
      textarea {
        ${tw`w-full rounded-md border-0 py-3 pl-3  ring-1  ring-gray-300`}

        &:focus {
          outline: 2px solid var(--primary);
        }
      }

      textarea {
        resize: none;
      }
    }
  }

  button {
    ${tw`p-4 mx-auto mt-5 block duration-300`}
    background-color: var(--primary);
    border-radius: 40px;
    width: 180px;

    &:hover {
      background-color: rgba(225, 180, 225, 0.7);
    }
  }
`;
