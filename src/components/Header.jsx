import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import profileIcon from '../images/profileIcon.png';
import searchIcon from '../images/searchIcon.png';
import { SearchBar } from './SearchBar';
import { Head, Logos, Icons, Search } from '../styles/Header';
import HeaderRecipesapp from '../images/HeaderRecipesapp.png';
import RecipesLogo from '../images/Recipes.png';
import AppLogo from '../images/App.png';
import foods from '../images/foods.png';
import Drinks from '../images/Drinks.png';

function Header({ pathname, title }) {
  const shouldDisplayIcon = pathname === '/meals' || pathname === '/drinks';
  const {
    showBar,
    showBarFunc,
  } = useContext(HeaderContext);
  return (
    <Head>
      <Logos>
        <img
          src={ HeaderRecipesapp }
          alt="recipes app icon"
        />
        <div>
          <img
            src={ RecipesLogo }
            alt="recipes escrito"
          />
          <img
            src={ AppLogo }
            alt="app escrito"
          />
        </div>
      </Logos>

      <Icons>
        <Link to="/profile">
          <img
            src={ profileIcon }
            alt="profile"
            data-testid="profile-top-btn"
          />
        </Link>

        { shouldDisplayIcon && (
          <button
            onClick={ showBarFunc }
            style={ { background: 'none', border: 'none' } }
          >
            <img
              src={ searchIcon }
              alt="search"
              data-testid="search-top-btn"
            />
          </button>
        )}
      </Icons>

      <Search>
        <img
          src={ pathname === '/meals' ? foods : Drinks }
          alt="meals icon"
          data-testid="page-title"
        />
        { showBar && (<div><SearchBar page={ title } /></div>) }
      </Search>
    </Head>
  );
}

export default Header;

Header.propTypes = {
  pathname: PropTypes.string,
  title: PropTypes.string,
}.isRequired;
