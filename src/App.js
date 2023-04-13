import React from 'react';
import HeaderProvider from './context/HeaderProvider';
import RecipeProvider from './context/RecipeProvider';
import DoneRecipesProvider from './context/DoneRecipesProvider';
import Routes from './Routes';
import { GlobalStyle } from './styles';

class App extends React.Component {
  render() {
    return (
      <RecipeProvider>
        <HeaderProvider>
          <DoneRecipesProvider>
            <Routes />
            <GlobalStyle />
          </DoneRecipesProvider>
        </HeaderProvider>
      </RecipeProvider>
    );
  }
}

export default App;
