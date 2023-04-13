import Recipes from '../components/Recipes';
import Layout from '../components/Layout';

function Drinks() {
  return (
    <div>
      <Layout title="Drinks" pathname="/drinks">
        <Recipes />
      </Layout>
    </div>
  );
}

export default Drinks;
