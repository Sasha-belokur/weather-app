import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <h1 className="page-header__title">Forecast</h1>
        <input
          className="page-header__search"
          type="text"
          placeholder="Enter your city please"
          name="search"
        />
      </header>
    );
  }
}

export default Header;
