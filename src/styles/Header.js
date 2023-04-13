import styled from 'styled-components';

const colors = {
  primary: '#fcc436',
  secondary: '#41197f',
  assets: '#ffffff',
};

export const Head = styled.header`
display: flex;
justify-content: space-between;
height: 147px;
position: relative;
width: 360px;
`;

export const Logos = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
background-color: ${colors.primary};
outline: none;
width: 360px;
height: 52px;

  div {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Icons = styled.section`
background-color: ${colors.primary};
padding: 10px;
padding-top: 15px;
display: flex;
align-items: center;
justify-content: flex-end;
gap: 20px;
width: 360px;
height: 52px;

  button:hover {
    cursor: pointer;
  }
`;

export const Search = styled.section`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
left: 15px;
top: 83px;
height: 84px;
width: 90%;
`;

export const SearchComponent = styled.div`
text-align: center;
border-radius: 10px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${colors.secondary};
color: ${colors.assets};
width: 330px;
height: 115px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button {
    position: absolute;
    width: 200px;
    height: 25px;
    left: 60px;
    top: 75px;
    background: ${colors.primary};
    color: ${colors.assets};
    border-radius: 5px;
    text-transform: uppercase;
    border: none;
  }

  button:hover {
    cursor: pointer;
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 10px ${colors.primary};
  }
`;

export const SearchInput = styled.div`

input {
box-sizing: border-box;
width: 330px;
height: 40px;
left: 11px;
top: 168px;
padding: 15px;
background: ${colors.assets};
border: 1px solid #B1B1B1;
border-radius: 5px;
}

input:focus {
  outline: none;
  border: 1px solid ${colors.primary};
  box-shadow: 0 0 10px ${colors.primary};
}
`;

export const RadioInputs = styled.div`
  display: flex;
  position: absolute;
  top: 50px;
  left: 35px;
  justify-content: space-evenly;
  width: 250px;
  font-size: 12px;

  input[type="radio"] {
    margin-right: 3px;
  }

  input[type="radio"] {
    accent-color: ${colors.primary};
  }

  input[type="radio"]:hover {
    cursor: pointer;
  }
`;
