import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const DetailedRecipe = styled.main`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   /* position: relative; */

h3 {
   position: absolute;
   top: 130px;
   left: 20px;
   color: ${colors.primary};
   font-family: 'Epilogue', sans-serif;
   font-style: normal;
   font-weight: 700;
   line-height: 12px;
}

footer {
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 10px;
};
`;

export const Buttons = styled.div`
display: flex;
justify-content: space-evenly;
width: 80px;
position: absolute;
top: 15px;
right: 20px;

   img {
      width: 25px;
      height: 25px;
      left: 307px;
      top: 19px;
   }
`;

export const Categoria = styled.h2`
position: absolute;
top: 21px;
left: 20px;
color: ${colors.primary};
font-family: 'Epilogue', sans-serif;
font-style: normal;
font-weight: 700;
line-height: 12px;
`;

export const NomeDaReceita = styled.h1`
position: absolute;
top: 5px;
display: flex;
align-items: center;
justify-content: center;
width: 362.01px;
height: 150px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 900;
font-size: 20px;
line-height: 20px;
text-align: center;
letter-spacing: 0.105em;
text-transform: uppercase;
color: ${colors.assets};
`;

export const RecipeImage = styled.img`
   width: 362.01px;
   height: 161.85px;
   background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), 
   rgba(0, 0, 0, 0.35)), url(.jpg);
   border-radius: 0px;
   object-fit: cover;
   position: relative !important;
   margin-bottom: 25px;
`;

export const Ingredientes = styled.div`
font-size: auto;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: center;
overflow: scroll;
gap: 5px;
padding-top: 15px;
padding-bottom: 10px;
padding-left: 20px;
margin-top: 5px;
margin-bottom: 20px;
width: 335px;
height: auto;
border: 0.554397px solid #B1B1B1;
border-radius: 5.35144px;

h1 {
width: 142.8px;
height: 21px;
left: 23.01px;
top: 197px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 20px;
color: #1A1B1C;
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
margin-bottom: 50px;
width: 335px;
height: auto;
border: 0.554397px solid #B1B1B1;
border-radius: 5.35144px;
z-index: 1;

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

export const InstrucoesTitulo = styled.div`
top: 20px;
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

export const Video = styled.div`
display: flex;
position: relative;
flex-direction: column;
padding-left: 30px;
padding-right: 30px;
margin-bottom: 50px;

h2 {
   position: absolute;
   width: 142.8px;
   height: 21px;
   left: 50px;
   top: -30px;

   font-family: 'Epilogue';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 20px;
}
`;

export const Carrosel = styled.div`
display: flex;
text-align: center;
overflow-x: auto;
scroll-snap-type: x mandatory;
-webkit-overflow-scrolling: touch;
margin-bottom: 30px;

section {
   flex: none;
   width: 100%;
   height: 200px;
   scroll-snap-align: start;
}

img {
   width: 200px;
   height: 180px;
}

p {
height: 12px;
font-family: 'Epilogue';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 12px;
}
`;

export const RecomendadoTitulo = styled.h1`
   width: 205px;
   height: 21px;
   font-family: 'Epilogue';
   font-style: normal;
   font-weight: 700;
   font-size: 20px;
   line-height: 20px;
`;
