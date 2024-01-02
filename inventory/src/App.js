import './App.css';
import SearchBar from "./SearchBar.js";
import AddItem from "./AddItem.js";
import ItemsDisplay from "./ItemsDisplay";
import {useState} from "react";

function App() {
  const [filters, setFilters] = useState({})
  const [data, setData] = useState({items: []})

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };
  const addItemToData = (item) => {
    let items = data['items'];
    item.id = items.length
    items.push(item);
    setData({items: items});
    console.log(data);
  };
 
  return (
    <div className="App">
      <SearchBar updateSearchParams={updateFilters} />
      <ItemsDisplay item={data["items"]} />
      <AddItem addItem={addItemToData} />
    </div>
  )
}


export default App;