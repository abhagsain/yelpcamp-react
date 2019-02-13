import React from "react";
import Modal from "./Modal";
const NotFound = () => {
  return (
    <div className="container">
      <Modal
        desc="Do not get lost in the emptiness. Find your way back!"
        btnLabel="Go back"
        link="/campgrounds"
      />
    </div>
  );
};

export default NotFound;
