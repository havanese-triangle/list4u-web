import './App.css';
import Header from "./Header"
import {useEffect, useState} from "react";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState({name: "None", categories: []});

  useEffect(() => {
    const fetchList = async () => {
      const rsp = await fetch("https://list4u-api.herokuapp.com/");
      const items = await rsp.json();
      setItems(items);
    };
    fetchList();
  }, []);

  return (
      <div className="container">
        <Header subtitle={items.name} />
        <ItemList categories={items.categories} />
      </div>
  );
}

export default App;
