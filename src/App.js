import { React, useState, useEffect } from "react";
import Axios from "axios";
import List from "./components/List.jsx";
import AddCow from "./components/AddCow.jsx";
import SelectCow from "./components/SelectCow.jsx";
import EditCow from "./components/EditCow.jsx";

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCow, setSelectedCow] = useState("");
  const [showDescription, setShowDescription] = useState(false);
  const [update, setUpdate] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    Axios.get("http://localhost:3000/api/cows").then((result) => {
      setList(result.data);
    });
  }, [update]);

 

  const changeSelectedCow = (newCow) => {
    setSelectedCow(newCow);
    setShowDescription(true);
  };

  return (
    <div className="App">
      {showDescription ? (
        <SelectCow setShowDescription={setShowDescription} cow={selectedCow} />
      ) : (
        ""
      )}
      <List list={list} handleCow={changeSelectedCow} update={update} setUpdate={setUpdate} />
      {isEditing? ( 
        <AddCow name={name} 
        setName={setName} 
        description={description} 
        setDescription={setDescription} />
        ):
        (<EditCow name={name} 
          setName={setName} 
          description={description} 
          setDescription={setDescription}/>)}
     
    </div>
  );
}

export default App;
