import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from '../styles';

class Button extends Component {
  render() {
    const { label, onClick, type, moreClasses, disabled, dataTestId } = this.props;
    return (
      <Buttons
        className={ `button-${moreClasses}` }
        type={ type }
        onClick={ onClick }
        disabled={ disabled }
        data-testid={ dataTestId }
      >
        { label }
      </Buttons>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  moreClasses: PropTypes.string,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string,

};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  moreClasses: '',
  disabled: false,
  dataTestId: '',
};

export default Button;
