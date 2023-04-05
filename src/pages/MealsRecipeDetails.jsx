import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailedRecipeCard from '../components/DetailedRecipeCard';
import Header from '../components/Header';
import RecipeContext from '../context/RecipeContext';

function MealsDetailedRecipes() {
  const { setId } = useContext(RecipeContext);
  const { mealsId } = useParams();

  useEffect(() => {
    setId(mealsId);
  }, [setId, mealsId]);

  return (
    <>
      <Header title="Detailed Recipes" />
      <DetailedRecipeCard />
    </>
  );
}

export default MealsDetailedRecipes;
