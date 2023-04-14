import { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import HeaderContext from '../context/HeaderContext';
import RecipesCard from './RecipesCard';
import { getMeals } from '../services/mealsAPI';
import { getDrinks } from '../services/drinksAPI';
import { Filters } from '../styles/Home';
import All from '../images/All.png';
import Beef from '../images/Beef.png';
import Breakfast from '../images/Breakfast.png';
import Chicken from '../images/Chicken.png';
import Dessert from '../images/Dessert.png';
import Goat from '../images/Goat.png';
import AllDrinks from '../images/AllDrinks.png';
import Cocktail from '../images/Cocktail.png';
import Cocoa from '../images/Cocoa.png';
import OrdinaryDrink from '../images/OrdinaryDrink.png';
import Other from '../images/Other.png';
import Shake from '../images/Shake.png';

function Recipes() {
  const five = 5;
  const twelve = 12;
  const history = useHistory();
  const { pathname } = history.location;

  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(null);

  const { filteredRecipes } = useContext(HeaderContext);

  useEffect(() => {
    if (filteredRecipes.length > 1) {
      setRecipes(filteredRecipes);
    } else if (pathname === '/meals') {
      getMeals('s', '', 'search', 'meals')
        .then((response) => response
          .slice(0, twelve))
        .then(setRecipes);
      getMeals('c', 'list', 'list', 'meals')
        .then((response) => response
          .slice(0, five))
        .then(setCategories);
    } else if (pathname === '/drinks') {
      getDrinks('s', '', 'search', 'drinks')
        .then((response) => response
          .slice(0, twelve))
        .then(setRecipes);
      getDrinks('c', 'list', 'list', 'drinks')
        .then((response) => response
          .slice(0, five))
        .then(setCategories);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, filteredRecipes]);

  const handleClick = ({ target }) => {
    if (target.alt !== 'All' && target.alt !== category) {
      if (pathname === '/meals') {
        getMeals('c', target.alt, 'filter', 'meals')
          .then((response) => response
            .slice(0, twelve))
          .then(setRecipes);
        setCategory(target.alt);
      } else if (pathname === '/drinks') {
        getDrinks('c', target.alt, 'filter', 'drinks')
          .then((response) => response
            .slice(0, twelve))
          .then(setRecipes);
        setCategory(target.alt);
      }
    } else if (pathname === '/meals') {
      getMeals('s', '', 'search', 'meals')
        .then((response) => response
          .slice(0, twelve))
        .then(setRecipes);
      setCategory('');
    } else {
      getDrinks('s', '', 'search', 'drinks')
        .then((response) => response
          .slice(0, twelve))
        .then(setRecipes);
      setCategory('');
    }
  };

  const verifyMealIcon = (src) => {
    switch (src) {
    case 'Beef':
      return Beef;
    case 'Breakfast':
      return Breakfast;
    case 'Chicken':
      return Chicken;
    case 'Goat':
      return Goat;
    case 'Dessert':
      return Dessert;
    default:
      break;
    }
  };

  const verifyDrinksIcon = (src) => {
    switch (src) {
    case 'AllDrinks':
      return AllDrinks;
    case 'Cocktail':
      return Cocktail;
    case 'Cocoa':
      return Cocoa;
    case 'Ordinary Drink':
      return OrdinaryDrink;
    case 'Other / Unknown':
      return Other;
    case 'Shake':
      return Shake;
    default:
      break;
    }
  };

  return (
    <div>
      <Filters>
        <button
          type="button"
          data-testid="All-category-filter"
          onClick={ (e) => handleClick(e) }
          style={ { background: 'none', border: 'none' } }
        >
          {
            pathname === '/meals'
              ? <img src={ All } alt={ All } />
              : <img src={ AllDrinks } alt={ All } />
          }
        </button>
        {
          categories.map((category1, index) => (
            <button
              key={ index }
              data-testid={ `${category1.strCategory}-category-filter` }
              onClick={ (e) => handleClick(e) }
              style={ { background: 'none', border: 'none' } }
            >
              { pathname === '/meals' ? <img
                src={ verifyMealIcon(category1.strCategory) }
                alt={ (category1.strCategory) }
              /> : <img
                src={ verifyDrinksIcon(category1.strCategory) }
                alt={ (category1.strCategory) }
              />}
            </button>
          ))
        }
      </Filters>
      <main>
        {
          recipes.map((recipe, index) => (
            <RecipesCard
              key={ `${pathname}-${index}` }
              index={ index }
              name={ recipe[pathname === '/meals' ? 'strMeal' : 'strDrink'] }
              image={ recipe[pathname === '/meals' ? 'strMealThumb' : 'strDrinkThumb'] }
              URL={ `${pathname}/${recipe[pathname === '/meals'
                ? 'idMeal' : 'idDrink']}` }
            />
          ))
        }
      </main>
    </div>
  );
}

Recipes.propTypes = {
  pathname: propTypes.string,
}.isRequired;

export default Recipes;
