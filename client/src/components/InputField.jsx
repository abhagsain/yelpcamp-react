import React from "react";
const Input = ({ type, name, onChange, value, errors, ...rest }) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className="form-control"
        {...rest}
        name={name}
        value={value}
        onChange={onChange}
      />
      {errors ? (
        <small>{errors.charAt(0).toUpperCase() + errors.substr(1)}</small>
      ) : null}
    </div>
  );
};

export default Input;
