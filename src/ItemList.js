import {Component} from "react";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const names = this.props.categories.map((category) =>
      <li>{category.name}</li>
    );
    return(
      <ul>
        {names}
      </ul>
    );
  }
}

export default ItemList;