import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { type, name, label, onChange, value, dataTestId, placeholder } = this.props;
    return (
      <label className="label" htmlFor={ name }>
        <div className="">
          <input
            className="input"
            data-testid={ dataTestId }
            type={ type }
            name={ name }
            value={ value }
            onChange={ onChange }
            id={ name }
            label={ label }
            placeholder={ placeholder }
          />
        </div>
      </label>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  dataTestId: PropTypes.string.isRequired,
};

Input.defaultProps = {
  label: '',
  value: '',
  name: '',
  onChange: null,
  placeholder: '',
};

export default Input;
