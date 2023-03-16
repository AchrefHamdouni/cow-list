import React from "react";

function SelectCow({ cow,setShowDescription }) {
  return (
    <div className="bg-red-100">
      <div>
        <ul>
          <li><span className="font-bold">Name </span> {cow.name} </li>
          <li><span className="font-bold">Description:</span>  {cow.description}</li>
        </ul>
        <button className=" mt-2 ml-48 bg-red-700 text-white text-xs font-bold px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
         onClick={()=>setShowDescription(false)}>Close</button>
      </div>
    </div>
  );
}

export default SelectCow;
