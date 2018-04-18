import React, { Component } from "react";

import { debounce } from "../utils";

class Header extends Component {
  constructor() {
    super();
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler() {
    const city = this.searchInput.value;
    this.props.onSearch(city);
  }

  render() {
    return (
      <header className="page-header">
        <h1 className="page-header__title">Forecast</h1>
        <input
          className="page-header__search"
          onChange={debounce(this.changeHandler, 500)}
          ref={input => (this.searchInput = input)}
          type="text"
          placeholder="Enter your city please"
          name="search"
        />
      </header>
    );
  }
}

export default Header;
