import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.png';
import mealIcon from '../images/mealIcon.png';
import { Foot } from '../styles/Footer';

function Footer() {
  const history = useHistory();
  return (
    <Foot data-testid="footer">
      <div>
        <button
          type="button"
          data-testid="meals-bottom-btn"
          onClick={ () => history.push('/meals') }
          src={ mealIcon }
        >
          <img
            src={ mealIcon }
            alt="Logo de uma taça"
          />
        </button>
      </div>

      <div>
        <button
          type="button"
          data-testid="drinks-bottom-btn"
          onClick={ () => history.push('/drinks') }
          src={ drinkIcon }
        >
          <img
            src={ drinkIcon }
            alt="Logo de uma colher e faca"
          />
        </button>
      </div>
    </Foot>
  );
}

export default Footer;
