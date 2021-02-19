import React, {useState , useEffect} from "react";
import CharacterGrid from "./components/characters/CharacterGrid";
import './App.css';
import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import logo from "./images/logo.png";
const App = ()=> {
  const[items,setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const[query,setQuery] = useState("");
  useEffect(()=>{
    fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(res=>res.json())
    .then(data=>setItems(data))
    setIsLoading(false);
    // console.log(items);
  },[query]);
  return (
    <div className="container">
    <Header logo={logo}/>
    <Search getQuery = {(q)=>setQuery(q)}/>
    <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
