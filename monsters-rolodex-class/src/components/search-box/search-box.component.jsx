import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    console.log("render SearchBox component");

    const { onSearchHandler, className, placeholder } = this.props;

    return (
      <div>
        <input
          className={`search-box ${className}`}
          type="search"
          placeholder={placeholder}
          onChange={onSearchHandler}
        />
      </div>
    );
  }
}

export default SearchBox;
