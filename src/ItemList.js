import {Component} from "react";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {category: props.category};
  }
  render() {
    const category = this.state.category;
    const items = category.items;
    const names = items.map((item) =>
      <li key={item.name}>{item.name}</li>
    );
    return(
      <li>{category.name}
        <ul>
          {names}
        </ul>
      </li>
    );
  }
}

export default ItemList;