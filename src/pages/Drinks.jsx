import Recipes from '../components/Recipes';
import Layout from '../components/Layout';
import { RecipeContainer } from '../styles/Home';

function Drinks() {
  return (
    <div>
      <Layout title="Drinks" pathname="/drinks">
        <RecipeContainer>
          <Recipes />
        </RecipeContainer>
      </Layout>
    </div>
  );
}

export default Drinks;
