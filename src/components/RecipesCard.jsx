import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardRecipes } from '../styles/Home';

function RecipesCard({ index, name, image, URL }) {
  return (
    <CardRecipes>
      <Link to={ URL }>
        <div data-testid={ `${index}-recipe-card` }>
          <img
            src={ image }
            alt={ name }
            data-testid={ `${index}-card-img` }
            style={ {
              width: '163.35px',
              height: '134.85px',
              borderRadius: '5px 5px 0 0' } }
          />
          <h3 data-testid={ `${index}-card-name` }>{ name }</h3>
        </div>
      </Link>
    </CardRecipes>
  );
}

RecipesCard.propTypes = {
  index: propTypes.number,
  name: propTypes.string,
  thumb: propTypes.string,
}.isRequired;

export default RecipesCard;
