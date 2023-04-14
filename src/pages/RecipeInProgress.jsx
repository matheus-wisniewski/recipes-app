import React, { useState, useEffect } from 'react';
import { useHistory, useParams /* useLocation */ } from 'react-router-dom';
import { getDetailedMeals } from '../services/mealsAPI';
import { getDetailedDrink } from '../services/drinksAPI';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import { Buttons, Categoria, DetailedRecipe,
  NomeDaReceita, RecipeImage } from '../styles/DetailedRecipe';
import {
  IngredienteTitulo, Ingredientes,
  Instrucoes, InstrucoesTitulo, FinishButtons } from '../styles/InProgress';

const copy = require('clipboard-copy');

function RecipeInProgress() {
  const history = useHistory();
  const idAndType = useParams();
  const [isDisabled, setIsDisabled] = useState(true);
  const [checks, setChecks] = useState([]);
  const [id, setId] = useState('');
  const [type, setType] = useState('');
  const [fullDetails, setFullDetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [title, setTitle] = useState('');
  const [src, setSrc] = useState('');
  const [alcoholic, setAlcoholic] = useState(null);
  const [measures, setMeasures] = useState([]);
  const [category, setCategory] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    const idOf = Object.values(idAndType);
    const isType = Object.keys(idAndType);
    setId(idOf[0]);
    if (isType[0] === 'drinksId') {
      getDetailedDrink(idOf[0])
        .then((response) => setFullDetails((response.drinks)[0]));
    } else if (isType[0] === 'mealsId') {
      getDetailedMeals(idOf[0])
        .then((response) => setFullDetails((response.meals)[0]));
    }
  }, [idAndType]);
  useEffect(() => {
    if (fullDetails.idDrink) {
      setType('drinks');
      const href = fullDetails.strDrinkThumb;
      const titleOf = fullDetails.strDrink;
      const alcoholicOf = fullDetails.strAlcoholic;
      setAlcoholic(alcoholicOf);
      setTitle(titleOf);
      setSrc(href);
    } else {
      setType('meals');
      const href = fullDetails.strMealThumb;
      const titleOf = fullDetails.strMeal;
      const categoryOf = fullDetails.strCategory;
      setCategory(categoryOf);
      setTitle(titleOf);
      setSrc(href);
    }
    const previousFavorites = JSON.parse(localStorage.getItem('favoriteRecipes'))
    || [];
    if (previousFavorites.some((fav) => fav.id === id)) { setIsFav(true); }
    const previousDoneRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'))
    || {};
    const checksOf = previousDoneRecipes[type] ? Object
      .keys(previousDoneRecipes[type]) : [];
    if (checksOf.includes(id)) setChecks(previousDoneRecipes[type][id]);
    const measuresAr = [];
    const ingredientsAr = [];
    const twenty = 20;
    for (let i = 1; i <= twenty; i += 1) {
      if (fullDetails[`strIngredient${i}`]) {
        ingredientsAr.push(fullDetails[`strIngredient${i}`]);
        measuresAr.push(fullDetails[`strMeasure${i}`]);
      }
    }
    setMeasures(measuresAr);
    setIngredients(ingredientsAr);
    if (checksOf.includes(id)) {
      setChecks(previousDoneRecipes[type][id]);
      if (previousDoneRecipes[type][id].length === ingredientsAr.length) {
        setIsDisabled(false);
      }
    }
  }, [fullDetails, type, id]);
  const doneRecipesDealer = (ingredientsDone) => {
    const typo = type === 'drinks' ? 'drink' : 'meal';
    const previousDidRecipes = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    let newDoneRecipes = [];
    const tags = fullDetails.strTags ? (fullDetails.strTags).split(',') : [];
    const newDoneRecipe = {
      id,
      type: typo,
      nationality: fullDetails.strArea || '',
      category: fullDetails.strCategory || '',
      alcoholicOrNot: alcoholic || '',
      name: title,
      image: src,
      doneDate: new Date(),
      tags,
    };
    if (ingredientsDone.length === ingredients.length) {
      newDoneRecipes = [...previousDidRecipes, newDoneRecipe];
    } else {
      newDoneRecipes = previousDidRecipes.filter((recipe) => recipe.id !== id);
    }
    localStorage.setItem('doneRecipes', JSON.stringify(newDoneRecipes));
  };
  const checkDealer = (target) => {
    const { value } = target;
    const ingredientsDone = !checks.includes(value) ? [...checks, value] : checks
      .filter((check) => check !== value);
    const previousChecks = JSON.parse(localStorage.getItem('inProgressRecipes')) || {};
    const prevCAr = previousChecks && Object.values(previousChecks);
    let newChecks = {};
    if (prevCAr.length > 0) {
      newChecks = { ...previousChecks,
        [type]: { ...previousChecks[type], [id]: ingredientsDone } };
    } else {
      newChecks = { [type]: { [id]: ingredientsDone } };
    }
    setChecks(ingredientsDone);
    localStorage.setItem('inProgressRecipes', JSON
      .stringify(newChecks));
    if (ingredientsDone.length === ingredients.length) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
    doneRecipesDealer(ingredientsDone);
  };
  const copyBtn = () => {
    let address = '';
    if (type === 'meals') {
      address = `http://localhost:3000/meals/${id}`;
    } else {
      address = `http://localhost:3000/drinks/${id}`;
    }
    setIsCopied(true);
    copy(address);
  };
  const favoriteManager = () => {
    const ancientFavorite = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    let newFavs = [];
    const typo = type === 'drinks' ? 'drink' : 'meal';
    if (ancientFavorite.length > 0) {
      if (ancientFavorite.some((favs) => favs.id === id)) {
        setIsFav(false);
        newFavs = ancientFavorite.filter((favs) => favs.id !== id);
      } else {
        setIsFav(true);
        newFavs = [...ancientFavorite, {
          id,
          type: typo,
          nationality: fullDetails.strArea || '',
          category: fullDetails.strCategory || '',
          alcoholicOrNot: alcoholic || '',
          name: title,
          image: src,
        }];
      }
    } else {
      setIsFav(true);
      newFavs = [{
        id,
        type: typo,
        nationality: fullDetails.strArea || '',
        category: fullDetails.strCategory || '',
        alcoholicOrNot: alcoholic || '',
        name: title,
        image: src,
      }];
    }
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavs));
  };
  return (
    <DetailedRecipe>
      <RecipeImage
        width="300px"
        data-testid="recipe-photo"
        alt="recipe"
        src={ src }
      />
      <NomeDaReceita data-testid="recipe-title">{ title }</NomeDaReceita>
      <Buttons>
        <button
          type="button"
          data-testid="favorite-btn"
          onClick={ favoriteManager }
          src={ !isFav ? whiteHeartIcon : blackHeartIcon }
          style={ { background: 'none', border: 'none' } }
        >
          <img alt="favorite icon" src={ !isFav ? whiteHeartIcon : blackHeartIcon } />
        </button>
        <button
          type="button"
          data-testid="share-btn"
          onClick={ copyBtn }
          style={ { background: 'none', border: 'none' } }
        >
          <img src={ shareIcon } alt="compartilhar icone" />
        </button>
        { isCopied && <p>Link copied!</p> }
      </Buttons>
      <Categoria data-testid="recipe-category">{ category }</Categoria>
      <h3>{ alcoholic && `alcohol: ${alcoholic}`}</h3>
      <Ingredientes data-testid="instructions">
        <IngredienteTitulo>Ingredientes</IngredienteTitulo>
        <ul>
          {
            ingredients.map((ing, i) => (
              <li
                style={ checks.includes(ing)
                  ? { textDecoration: 'line-through solid rgb(0, 0, 0)' } : {} }
                data-testid={ `${i}-ingredient-step` }
                key={ i }
              >
                <input
                  name={ `check${i}` }
                  value={ ing }
                  checked={ checks.some((check) => check === ing) }
                  type="checkbox"
                  onChange={ ({ target }) => {
                    checkDealer(target);
                  } }
                />
                {`${ing}`}
                { measures[i] && ` - ${measures[i]}`}
              </li>
            ))
          }
        </ul>
      </Ingredientes>
      <Instrucoes>
        <InstrucoesTitulo>Instructions</InstrucoesTitulo>
        <p>{fullDetails.strInstructions}</p>
      </Instrucoes>
      <FinishButtons
        data-testid="finish-recipe-btn"
        disabled={ isDisabled }
        onClick={ () => history.push('/done-recipes') }
      >
        finish
      </FinishButtons>
    </DetailedRecipe>
  );
}
export default RecipeInProgress;
