import React from 'react';
import { screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

import { localStorageMock } from '../setupTests';
import RecipeInProgress from '../pages/RecipeInProgress';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Testes de cobertura de página para página receitas em progresso', () => {
  const drink15997 = '/drinks/15997/in-progress';
  const favoriteButton = 'favorite-btn';
  const favoriteRecipesMock = [{
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  }];
  const inProgressRecipesMock = {
    drinks: {
      15997: ['Galliano', 'Ginger ale', 'Ice'] },
  };
  const favoriteRecipesMock1 = [{
    id: '11007',
    type: 'drink',
    nationality: '',
    category: 'Ordinary Drink',
    alcoholicOrNot: 'Alcoholic',
    name: 'Margarita',
    image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
  }];
  const mealsRecipe1 = '/meals/53060/in-progress';

  it('Testes básico da estrutura html', async () => {
    const { history } = renderWithRouter(<RecipeInProgress />);
    await act(async () => {
      history.push('/meals/53065/in-progress');
    });
    const title = await screen.findByTestId('recipe-title');
    const category = screen.getByTestId('recipe-category');
    const recipeImg = screen.getByAltText('recipe');
    const instructions = screen.getByTestId('instructions');
    waitFor(async () => {
      const ingredientList = await screen.findAllByRole('listitem');

      expect(ingredientList.length).toBe(6);
    });
    // console.log(ingredientList.length);
    expect(title).toBeVisible();
    expect(category).toBeInTheDocument();
    expect(recipeImg).toBeVisible();
    expect(instructions).toBeInTheDocument();
  });

  it('Testes de cobertura botão share', async () => {
    jest.spyOn(navigator.clipboard, 'writeText');
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push('/meals/52771/in-progress');
    });
    const shareBtn = await screen.findByTestId('share-btn');
    userEvent.click(shareBtn);
    const message = await screen.findByText('Link copied!');
    expect(message).toBeVisible();
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('http://localhost:3000/meals/52771');
  });

  it('Testes de cobertura botão de favoritos', async () => {
    localStorageMock.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesMock));
    localStorageMock.setItem('doneRecipes', JSON.stringify([]));
    localStorageMock.setItem('inProgressRecipes', JSON.stringify({}));
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push('/meals/52771/in-progress');
    });
    const favoriteBtn = await screen.findByTestId(favoriteButton);
    expect(favoriteBtn).toHaveAttribute('src', blackHeartIcon);
    userEvent.click(favoriteBtn);
    waitFor(() => {
      expect(favoriteBtn).toHaveAttribute('src', whiteHeartIcon);
    });
  });

  it('Teste de funcionalidade das checkbox', async () => {
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push(mealsRecipe1);
    });
    const checks = await screen.findAllByRole('checkbox');
    const listIng = await screen.findAllByRole('listitem');
    expect(checks).toHaveLength(6);
    expect(checks[0]).not.toBeChecked();
    expect(listIng[0]).not.toHaveStyle('text-decoration: line-through solid rgb(0, 0, 0)');
    userEvent.click(checks[0]);
    expect(listIng[0]).toHaveStyle('text-decoration: line-through solid rgb(0, 0, 0)');
    expect(checks[0]).toBeChecked();
  });
  it('Teste de funcionalidade das checkbox - localStorage', async () => {
    // localStorageMock.setItem('favoriteRecipes', JSON.stringify([]));
    // localStorageMock.setItem('doneRecipes', JSON.stringify([]));
    localStorageMock.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesMock));
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push(drink15997);
    });
    const checks = await screen.findAllByRole('checkbox');
    const isAlcohol = await screen.findByTestId('isAlc');
    expect(isAlcohol).toBeVisible();
    const btnFinish = await screen.findByTestId('finish-recipe-btn');
    expect(checks[0]).toBeInTheDocument();
    expect(btnFinish).toBeDisabled();
    const favoriteBtn = screen.getByTestId(favoriteButton);
    userEvent.click(favoriteBtn);
    const img = await screen.findByAltText('favorite icon');
    expect(img).toHaveAttribute('src', blackHeartIcon);
  });
  it('Testando coberturas 1', async () => {
    // localStorageMock.setItem('favoriteRecipes', JSON.stringify([]));
    // localStorageMock.setItem('doneRecipes', JSON.stringify([]));
    // localStorageMock.setItem('inProgressRecipes', JSON.stringify(inProgressRecipesMock));
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push(drink15997);
    });
    const checks = await screen.findAllByRole('checkbox');
    const btnFinish = await screen.findByTestId('finish-recipe-btn');
    userEvent.click(checks[0]);
    userEvent.click(checks[1]);
    expect(btnFinish).toBeDisabled();
    userEvent.click(checks[2]);
    expect(btnFinish).toBeEnabled();
    userEvent.click(btnFinish);
    expect(history.location.pathname).toBe('/done-recipes');
  });
  it('Teste de cobertura - localStorage vazio', async () => {
    localStorageMock.setItem('favoriteRecipes', JSON.stringify(null));
    localStorageMock.setItem('doneRecipes', JSON.stringify(null));
    localStorageMock.setItem('inProgressRecipes', JSON.stringify(null));
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push(drink15997);
    });
    const checks = await screen.findAllByRole('checkbox');
    userEvent.click(checks[0]);
    expect(checks[0]).toBeChecked();
    userEvent.click(checks[1]);
    userEvent.click(checks[2]);
    userEvent.click(checks[0]);
    expect(checks[0]).not.toBeChecked();
    userEvent.click(checks[1]);
    userEvent.click(checks[2]);
    expect(checks[1]).not.toBeChecked();
    const favoriteBtn = screen.getByTestId(favoriteButton);
    userEvent.click(favoriteBtn);
  });
  it('Teste de cobertura - localStorage vazio', async () => {
    localStorageMock.setItem('favoriteRecipes', JSON.stringify(favoriteRecipesMock1));
    localStorageMock.setItem('doneRecipes', JSON.stringify(null));
    localStorageMock.setItem('inProgressRecipes', JSON.stringify(null));
    Object.defineProperty(global, 'localStorage', { value: localStorageMock });
    const { history } = renderWithRouter(<App />);
    await act(async () => {
      history.push(drink15997);
    });
    const favoriteBtn = screen.getByTestId(favoriteButton);
    userEvent.click(favoriteBtn);
    expect(favoriteBtn).toHaveAttribute('src', whiteHeartIcon);
  });
});
