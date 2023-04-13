import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html, body, #root {
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
}
`;

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

const font = {
  primary: 'Epilogue',
};

// ------------------------ Tela de login -------------------------

export const Logn = styled.main`
background-color: #41197F;
position: relative;
height: 120vh;
width: 69vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form {
    background-color: white;
    position: absolute;
    top: 370px;
    height: 65vh;
    width: 69vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
        h1 {
            color: ${colors.secondary};
            font-family: ${font.primary}, sans-serif;
            font-size: 20px;
            font-style: italic;
            font-weight: 500;
            line-height: 21px;
            letter-spacing: 0.165em;
            text-align: center;
        }

        input {
            width: 276px;
            height: 40px;
            border-radius: 5px;
            border: 0.5px solid #41197F;
            padding-left: 10px;
        }

        button {
            width: 276px;
            height: 40px;
            border-radius: 5px;
            background-color: ${colors.primary};
            color: ${colors.assets};
            font-weight: 700;
            size: 14px;
            line-height: 14.35px;
            text-transform: uppercase;
        }
}
`;

export const Logo = styled.img`
    position: absolute;
    top: 79.17px;
    width: 198px;
    height: 157.25px;
    filter: drop-shadow(0.785714px 13.3571px 10.2143px rgba(33, 18, 55, 0.2));
`;

export const Tomatao = styled.img`
position: absolute;
width: 420px;
left: 0;
height: 323px;
top: 160px;
z-index: 50;
`;
// ------------------------ Fim da tela de login -------------------------
