import React, { Component } from "react";
import { debounce } from "../utils";

class Header extends Component {
  constructor() {
    super();
    this.changeHandler = debounce(this.changeHandler.bind(this), 500);
  }

  changeHandler = () => {
    const city = this.searchInput.value;
    this.props.onSearch(city);
  };

  render() {
    return (
      <header className="page-header">
        <h1 className="page-header__title">Forecast</h1>
        <input
          className="page-header__search"
          onChange={this.changeHandler}
          type="text"
          placeholder="Enter your city please"
          name="search"
        />
      </header>
    );
  }
}

export default Header;
