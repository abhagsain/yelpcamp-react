import React, { Component } from "react";
import Input from "./InputField";
import TextArea from "./TextArea";
class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  validateInputField = ({ name, value }) => {
    // Check if the input is empty or not. If it's empty
    // add error corrosponding to that input field to this.state.error
    // and show it to the user
    value = value ? value.trim() : value;
    if (!value) {
      // If there're only whitespaces
      return name + " can't be empty";
    }
  };

  validate = () => {};
  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.errors };
    const err = this.validateInputField(input);
    if (error) {
      error[input.name] = err;
    }
    // else {
    //   delete error[input.name];
    // }
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ errors: error, data });
  };
  getInputField = (placeholder, name, type = "text") => {
    return (
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={this.handleChange}
        value={this.state.data[name] ? this.state.data[name] : ""}
        errors={this.state.errors[name]}
      />
    );
  };

  getTextArea = (placeholder, name) => {
    return (
      <TextArea
        placeholder={placeholder}
        name={name}
        onChange={this.handleChange}
      />
    );
  };

  renderButton = label => {
    return <button className="btn btn-primary">{label}</button>;
  };
}

export default Form;
