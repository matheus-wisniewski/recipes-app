import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailedRecipeCard from '../components/DetailedRecipeCard';
import RecipeContext from '../context/RecipeContext';

function DrinksDetailedRecipes() {
  const { setId } = useContext(RecipeContext);
  const { drinksId } = useParams();

  useEffect(() => {
    setId(drinksId);
  }, [setId, drinksId]);

  return (
    <DetailedRecipeCard />
  );
}

export default DrinksDetailedRecipes;
