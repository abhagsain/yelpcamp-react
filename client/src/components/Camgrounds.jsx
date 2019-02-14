import React, { Component } from "react";
import Modal from "./Modal";
import Campground from "./Campground";
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
    const camps = [
      {
        id: 1,
        name: "Venezuala",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nemo fugit voluptatum velit fuga est iusto accusamus. Autem, animi ducimus.",
        url: "https://images.unsplash.com/photo-1549928619-dec5c56266eb?"
      },
      {
        id: 2,
        name: "Mexico",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nemo fugit voluptatum velit fuga est iusto accusamus. Autem, animi ducimus.",
        url: "https://images.unsplash.com/photo-1549915009-4ad67f8ccf6a"
      }
    ];
    const label = `Welcome to Yelpcamp 2.0`;
    return (
      <div className="container">
        <Modal
          desc={this.getModalData()}
          label={label}
          link="/campgrounds/new"
          btnLabel="Add Campground"
          small="Nothing special it's just built with React"
        />
        <Campground camps={camps} />
      </div>
    );
  }
}

export default Campgrounds;
