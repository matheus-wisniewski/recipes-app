import React from 'react';
import PropTypes from 'prop-types';
import Recipes from '../components/Recipes';
import Layout from '../components/Layout';
import { RecipeContainer } from '../styles/Home';

function Meals() {
  return (
    <Layout title="Meals" pathname="/meals">
      <RecipeContainer>
        <Recipes />
      </RecipeContainer>
    </Layout>
  );
}

Meals.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Meals;
