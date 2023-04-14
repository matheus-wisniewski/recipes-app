import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import DetailedRecipeCard from '../components/DetailedRecipeCard';
import RecipeContext from '../context/RecipeContext';

function DetailedRecipes() {
  const { setId } = useContext(RecipeContext);
  const { drinksId, mealsId } = useParams();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes('meals')) {
      setId(mealsId);
    } else {
      setId(drinksId);
    }
  }, [setId, drinksId, mealsId, pathname]);

  return (
    <DetailedRecipeCard />
  );
}

export default DetailedRecipes;
