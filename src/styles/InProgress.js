import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const Ingredientes = styled.div`
font-size: auto;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
gap: 10px;
padding-top: 15px;
padding-bottom: 10px;
padding-left: 20px;
margin-top: 5px;
margin-bottom: 20px;
width: 335px;
height: auto;
border: 0.554397px solid #B1B1B1;
border-radius: 5.35144px;

ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

li {
    display: flex;
    align-items: center;
    gap: 10px;
}

`;

export const IngredienteTitulo = styled.div`
width: 142.8px;
height: 21px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
`;

export const Instrucoes = styled.div`
position: relative;
font-size: auto;
display: flex;
justify-content: flex-start;
overflow: scroll;
flex-direction: column;
box-sizing: border-box;
padding-top: 15px;
margin-bottom: 20px;
width: 335px;
height: auto;
border: 0.554397px solid #B1B1B1;
border-radius: 5.35144px;

p {
width: 301px;
height: auto;
padding-top: 35px;
padding-bottom: 10px;
padding-left: 20px;
font-family: 'Epilogue';
font-weight: 400;
overflow: scroll;
}
`;

export const InstrucoesTitulo = styled.h1`
left: 10px;
position: absolute;
width: 142.8px;
height: 21px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
text-align: center;
`;

export const FinishButtons = styled.button`
width: 336px;
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
