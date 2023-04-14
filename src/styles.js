import styled, { createGlobalStyle } from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}


html, body, #root {
  height: 100%;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
}
`;

export const Buttons = styled.button`
width: 276px;
height: 40px;
border-radius: 5px;
background-color: ${colors.primary};
color: ${colors.assets};
font-weight: 700;
size: 14px;
line-height: 14.35px;
text-transform: uppercase;
border: none;

:hover {
  cursor: pointer;
  border: 1px solid ${colors.primary};
  box-shadow: 0 0 10px ${colors.primary};
}
`;
