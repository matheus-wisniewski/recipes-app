import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';
import Button from './Button';
import { Buttons,
  DetailedRecipe,
  Ingredientes,
  RecipeImage,
  Categoria,
  NomeDaReceita,
  Instrucoes,
  IngredienteTitulo,
  InstrucoesTitulo,
  Video,
  Carrosel,
  RecomendadoTitulo } from '../styles/DetailedRecipe';
import like from '../images/like.png';
import share from '../images/Share.png';

function DetailedRecipeCard() {
  const { fullDetails, recommended } = useContext(RecipeContext);
  const [isFinished] = useState(false);
  const [isStarted] = useState(false);

  const { pathname } = useLocation();
  const history = useHistory();

  const recommendedAmount = 6;
  const recommendations = [];

  if (recommended !== null) {
    for (let i = 0; i < recommendedAmount; i += 1) {
      recommendations.push(
        {
          thumb: recommended[i].strDrinkThumb || recommended[i].strMealThumb,
          title: recommended[i].strDrink || recommended[i].strMeal,
        },
      );
    }
  }

  if (fullDetails !== null) {
    const fullArr = Object.entries(fullDetails);
    const ingredientArr = [];
    const measureArr = [];
    fullArr.forEach((value) => {
      if (value[0].includes('strIngredient')) {
        ingredientArr.push(value[1]);
      }
      if (value[0].includes('strMeasure')) {
        measureArr.push(value[1]);
      }
    });

    return (
      <DetailedRecipe>
        <RecipeImage
          src={ fullDetails.strMealThumb || fullDetails.strDrinkThumb }
          alt={ fullDetails.strMeal || fullDetails.strDrink }
          data-testid="recipe-photo"
          width="360"
          height="300"
        />

        <NomeDaReceita data-testid="recipe-title">
          { fullDetails.strMeal || fullDetails.strDrink }
        </NomeDaReceita>

        <Buttons>
          <button
            type="button"
            data-testid="share-btn"
            style={ { background: 'none', border: 'none' } }
          >
            <img src={ share } alt="favorite" />
          </button>
          <button
            type="button"
            label="Favorite"
            data-testid="favorite-btn"
            style={ { background: 'none', border: 'none' } }
          >
            <img src={ like } alt="favorite" />
          </button>
        </Buttons>

        <Categoria data-testid="recipe-category">
          { fullDetails.strCategory }
        </Categoria>

        <h3 data-testid="recipe-category">
          { fullDetails.strAlcoholic || null}
        </h3>

        <Ingredientes>
          <IngredienteTitulo>Ingredients</IngredienteTitulo>
          { ingredientArr.map((value, index) => (
            (value !== '' && value !== null) && (
              <p data-testid={ `${index}-ingredient-name-and-measure` } key={ index }>
                { value }
                { ' - '}
                { measureArr[index] }
              </p>
            )
          ))}
        </Ingredientes>

        <Instrucoes data-testid="instructions">
          <InstrucoesTitulo>Instructions</InstrucoesTitulo>
          <p>{ fullDetails.strInstructions }</p>
        </Instrucoes>

        <Video>
          <h2> Video </h2>
          <video width="330" height="300" controls data-testid="video">
            <source src={ fullDetails.strYoutube } />
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </Video>

        <footer>
          <RecomendadoTitulo>Recommended</RecomendadoTitulo>
          <Carrosel>
            { recommended !== null && recommendations.map((value, index) => (
              <section
                key={ index }
                data-testid={ `${index}-recommendation-card` }
              >
                <img
                  src={ value.thumb }
                  alt={ value.title }
                />
                <p
                  data-testid={ `${index}-recommendation-title` }
                >
                  { value.title }
                </p>
              </section>
            ))}
          </Carrosel>
        </footer>
        { (!isFinished)
        && (isStarted ? (
          <Button
            label="Continue Recipe"
            moreClasses="start-recipe"
          />
        ) : (
          <Button
            label="Start Recipe"
            moreClasses="start-recipe"
            dataTestId="start-recipe-btn"
            onClick={ () => history.push(`${pathname}/in-progress`) }
          />
        )) }

      </DetailedRecipe>
    );
  }
}

DetailedRecipeCard.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default DetailedRecipeCard;
