import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import DetailedRecipeCard from '../components/DetailedRecipeCard';
import RecipeContext from '../context/RecipeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function DrinksDetailedRecipes() {
  const { setId } = useContext(RecipeContext);
  const { drinksId } = useParams();

  useEffect(() => {
    setId(drinksId);
  }, [setId, drinksId]);

  return (
    <>
      <Header title="Detailed Drinks" />
      <DetailedRecipeCard />
      <Footer />
    </>
  );
}

export default DrinksDetailedRecipes;