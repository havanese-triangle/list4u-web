import {Component} from "react";
import ItemList from "./ItemList";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {categories: props.categories};
  }
  render() {
    const names = this.state.categories.map((category) =>
      <ItemList category={category} />
    );
    return(
      <ul>{names}</ul>
    );
  }
}

export default CategoryList;