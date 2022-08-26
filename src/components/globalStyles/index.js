import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        outline: none;
    }

    html, body {
        margin: 0;
        padding: 0;
    }

    html, body, .root, .root > div {
        height: 100%;
    }

    body {
        font-size: 1rem;
        height: 100%;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        min-width: 360px;
        background-color: #151515;
        color: #fff;   
    }

    body.hidden {
        overflow: hidden;
        padding-right: 6px;

        @media (max-width: 959px) {
            padding-right: 0;
        }
    }

    body::-webkit-scrollbar {
        width: 6px;
    }
    
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        border-radius: 8px;
    }
    
    .root > div {
        display: flex;
        flex-direction: column;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }

    .image-gallery.fullscreen-modal {
        z-index: 100;
    }

    .image-gallery-icon:focus {
        outline: none;
    }
`;

export default GlobalStyles;
