import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const Foot = styled.footer`
position: fixed;
display: flex;
align-items: center;
width: 56vh;
height: 52px;
top: 590px;
padding-left: 50px;
padding-right: 50px;
justify-content: space-between;
background-color: ${colors.secondary};

    button {
        width: 24.61px;
        height: 25.12px;
        background: none;
        border: none;
    }
`;
