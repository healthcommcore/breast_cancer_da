import React, { Component } from 'react';

const TextInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={ props.inputName }></label>
      <input type="text" value={ props.value } className="form-control" name={ props.inputName } id={ props.inputName } onChange={ props.onChange }/>
    </div>
  );
}

export default TextInput;
