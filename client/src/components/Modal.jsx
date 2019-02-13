import React from "react";
import { Link } from "react-router-dom";
const Modal = ({ label, desc, ...rest }) => {
  return (
    <div className="container">
      <div class="jumbotron mt-3">
        <h1>
          {rest.username ? rest.username + ", " : null}
          {label}
        </h1>
        <small className="text-primary">{rest.small ? rest.small : null}</small>
        <p class="lead">{desc}</p>
        <p>
          <Link to={rest.link} class="btn btn-primary">
            {rest.btnLabel}
          </Link>
        </p>
        <hr class="my-4" />
      </div>
    </div>
  );
};

export default Modal;
