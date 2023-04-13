import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Button from '../components/Button';
import { Logn, Logo, Tomatao } from '../styles';
import logoRecipesApp from '../images/logoRecipesApp.png';
import tomate from '../images/tomate.png';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEntryButtonDisabled, setIsEntryButtonDisabled] = useState(false);

  useEffect(() => {
    const inputCheck = () => {
      const minSize = 7;
      const mail = /\S+@\S+\.\S+/;

      const emailCheck = mail.test(email);
      const passwordCheck = password.length >= minSize;

      let isDisabled = true;

      if (emailCheck && passwordCheck) isDisabled = false;

      setIsEntryButtonDisabled(isDisabled);
    };

    inputCheck();
  }, [email, password]);

  return (
    <Logn>
      <Logo src={ logoRecipesApp } alt="recipeApp" />
      <Tomatao src={ tomate } alt="tomate grande na tela" />

      <form
        onSubmit={ (e) => {
          e.preventDefault();
          localStorage.setItem('user', JSON.stringify({ email }));
          history.push('/meals');
        } }
      >
        <h1> Login </h1>

        <Input
          label="Email"
          type="email"
          onChange={ (event) => setEmail(event.target.value) }
          value={ email }
          name="email"
          dataTestId="email-input"
          required
        />
        <Input
          label="Password"
          type="text"
          onChange={ (event) => setPassword(event.target.value) }
          value={ password }
          name="password"
          dataTestId="password-input"
          required
        />

        <Button
          disabled={ isEntryButtonDisabled }
          dataTestId="login-submit-btn"
          label="Entrar"
          type="submit"
        />
      </form>
    </Logn>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
