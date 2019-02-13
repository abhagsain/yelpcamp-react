import React, { Component } from "react";
import Modal from "./Modal";
class Campgrounds extends Component {
  getModalData = () => {
    return `To us, camping is all about finding those extra-special places to
          camp. But whatever you're looking for, as long as you favour the
          characterful rather than the commercial, smaller rather than larger
          sites, and value location or views over pristine facilities, then
          you're in the right place for discovering the very best campsites in
          the UK, France and a growing list of other European countries.`;
  };
  render() {
    const label = `Welcome to Yelpcamp 2.0`;
    return (
      <div>
        <Modal
          desc={this.getModalData()}
          label={label}
          link="/campgrounds/new"
          btnLabel="Add Campground"
          small="Nothing special it's just built with React"
        />
      </div>
    );
  }
}

export default Campgrounds;
