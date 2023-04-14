import GetRecipesCard from '../components/GetRecipesCard';
import Filters from '../components/Filters';
import Layout from '../components/Layout';

function DoneRecipes() {
  return (
    <DoneRecipes>
      <Layout title="Done Recipes" pathname="/done-recipes">
        <Filters />
        <GetRecipesCard LSItem="doneRecipes" />
      </Layout>
    </DoneRecipes>
  );
}

export default DoneRecipes;
