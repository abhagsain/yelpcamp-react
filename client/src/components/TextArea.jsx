import React from "react";
const TextArea = ({ type, onChange, placeholder, col, row, name }) => {
  return (
    <div className="form-group">
      <textarea
        name={name}
        className="form-control input-large"
        placeholder={placeholder}
        id="exampleFormControlTextarea1"
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
