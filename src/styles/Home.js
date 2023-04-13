import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const Filters = styled.section`
display: flex;
position: absolute;
top: -65px;
right: 5px;
gap: 10px;
`;

export const RecipeContainer = styled.main`
display: flex;
flex-direction: column;
position: absolute;
width: 336.35px;
height: 522.21px;
left: 20px;
top: 335px;
`;

export const CardRecipes = styled.main`
display: inline-block;
width: 168px;
height: 225px;
letter-spacing: 2px;
margin-bottom: -30px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 8px;  
        box-sizing: border-box;
        width: 163.2px;
        height: 166.12px;
        background: ${colors.assets};
        border: 0.517989px solid #B1B1B1;
        border-radius: 5px;
    }

    div:hover {
        background-color: ${colors.primary};
    }

    h3 {
        align-self: flex-start;
        color: black;
        font-family: 'Epilogue', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 12px;
    }

`;
