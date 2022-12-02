import { Component } from "react";
import "./card-list.styles.css";

import Card from "../card/card.component";

class CardList extends Component {
  onSearchChange = (e) => {
    console.log(e.target.value);
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField: searchField };
    });
  };

  render() {
    console.log("render card-list component");
    console.log(this.props);

    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster, index) => {
          return <Card key={index} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
