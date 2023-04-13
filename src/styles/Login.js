import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

const fonts = {
  primary: 'Epilogue',
};

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
            font-family: ${fonts.primary}, sans-serif;
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
            border: 0.5px solid ${colors.secondary};
            padding-left: 10px;
        }
        input:focus {
          outline: none !important;
          border: 1px solid ${colors.primary};
          box-shadow: 0 0 10px ${colors.primary};
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
        button:hover {
          cursor: pointer;
        }
        button:disabled {
          background-color: gray;
          cursor: auto;
        }
        button:not(:disabled) {
          border: none;
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
