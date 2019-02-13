import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    const { navItems, ...rest } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light bg-dark">
          <div className="container w-100">
            <Link className="navbar-brand text-white" to="/">
              {rest.brand}
            </Link>
            <ul className="navbar-nav">
              {navItems.map((el, index) => (
                <NavLink
                  key={el.to + index * index + el.label}
                  className="nav-item nav-link text-light"
                  to={el.to}>
                  {el.label}
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
