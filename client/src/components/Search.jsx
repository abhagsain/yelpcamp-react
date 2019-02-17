import React from "react";
import Input from "./InputField";

class Search extends React.Component {
  render() {
    const { onChange, value, placeholder } = this.props;
    return (
      <div className="form-group w-50">
        <Input
          type="text"
          placeholder={placeholder}
          className="form-control"
          name="search"
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Search;
