import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    outline:0;
  }
  button{
    cursor: pointer;
    border: none;
    }
  a{
    color: #000000;
    text-decoration: none;
  }
  ul, ol, li{
    list-style: none;
  }
  img{
    max-width: 100%;
  }
  input:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  body{
    font-family: 'Inter', sans-serif;
  }
  :root{
    --gray-1: #F9FAFB;
    --gray-2: #E5E7EB;
    --gray-3: #D1D5DB;
    --gray-4: #6B7280;
    --gray-5: #1F2937;
    --gray-6: rgba(0, 0, 0, 0.4);
    --color-primary: #22C55E;
    --color-primary-50: #16A34A;
    --color-secondary: #facc15;
    --white: #FFFFFF;


    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-10: 10px;
    --radius-20: 20px;

    --rem-08: 0.8rem;
    --rem-09: 0.9rem;
    --rem-11: 1.1rem;
    --rem-16: 1.6rem;

  }

`;
