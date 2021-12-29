import './App.css';
import Header from "./Header"
import {useEffect, useMemo, useState} from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const rsp = await fetch("https://list4u-api.herokuapp.com/");
      const items = await rsp.json();
      setItems(items);
    };
    fetchList();
  }, []);

  const selectedItem = useMemo(() => {
    if(items.length) {
      return items[0];
    }
  }, [items]);

  return (
      <div className="container">
        <Header subtitle="List 4 U" />
      </div>
  );
}

export default App;
