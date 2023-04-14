import React from 'react';
import HeaderProvider from './context/HeaderProvider';
import RecipeProvider from './context/RecipeProvider';
import GetRecipesProvider from './context/GetRecipesProvider';
import Routes from './Routes';
import { GlobalStyle } from './styles';

class App extends React.Component {
  render() {
    return (
      <RecipeProvider>
        <HeaderProvider>
          <GetRecipesProvider>
            <Routes />
            <GlobalStyle />
          </GetRecipesProvider>
        </HeaderProvider>
      </RecipeProvider>
    );
  }
}

export default App;
