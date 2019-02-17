import React from "react";
import { Link } from "react-router-dom";
const Modal = ({ label, desc, children, ...rest }) => {
  return (
    <div className="container">
      <div className="jumbotron mt-3">
        <h1>
          {rest.username ? rest.username + ", " : null}
          {label}
        </h1>
        <small className="text-primary">{rest.small ? rest.small : null}</small>
        <p className="lead">{desc}</p>
        <p>
          <Link to={rest.link} className="btn btn-primary">
            {rest.btnLabel}
          </Link>
        </p>
        <hr className="my-4" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
