import React from "react";
import Form from "./Form";
import Axios from "axios";
import { Redirect } from "react-router-dom";
class NewCampground extends Form {
  onSubmit = async event => {
    // Implement the logic of handling submit
    event.preventDefault();
    try {
      const { campground, URL, description } = this.state.data;
      if (campground && URL) {
        const data = {
          name: campground,
          url: URL,
          description: description
        };
        Axios.post("/campgrounds", data).then(({ status }) => {
          if (parseInt(status) === 200) {
            this.props.history.push("/campgrounds");
          }
        });
      }
    } catch (err) {
      alert("Sorry there was some error in creating the campgroud");
    }
  };
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <p className="lead text-white bg-dark d-inline-block">
              Implement Disable button logic. Error logic on Submit page,
              Separate onSubmit function to Form
            </p>
            <h2 className="my-3">Submit a Campground</h2>
            <form onSubmit={this.onSubmit} method="post">
              {this.getInputField("Campground name", "campground")}
              {this.getInputField("Image URL", "URL")}
              {this.getTextArea("Enter description", "description")}
              {this.renderButton("Submit")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCampground;
