import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailedRecipeCard from '../components/DetailedRecipeCard';
import RecipeContext from '../context/RecipeContext';

function MealsDetailedRecipes() {
  const { setId } = useContext(RecipeContext);
  const { mealsId } = useParams();

  useEffect(() => {
    setId(mealsId);
  }, [setId, mealsId]);

  return (
    <DetailedRecipeCard />
  );
}

export default MealsDetailedRecipes;
