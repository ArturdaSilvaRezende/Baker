/* src/GlobalStyles.ts */
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        font-size: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    //font-family: 'Playfair Display', serif;

    a {
        text-decoration: none;
    }

    li {
        list-style: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    img {
        display: block;
        width: 100%;
    }
    
    :root {
        --primary: #EAA636;
        --secondary: #545454;
        --light: #FDF5EB;
        --white: #fff;
        --dark: #1E1916;
    }
`;

export default GlobalStyles;
