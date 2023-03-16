import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Axios from "axios";
function List({ list, handleCow, update, setUpdate, }) {
  const deleteCow = (testId) => {
    Axios.delete(`http://localhost:3000/api/cows/${testId}`)
      .then((response) => {
        setUpdate(!update);
        console.log("hello");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-yellow-200 flex flex-col items-center mb-8 ">
      <h1 className="font-bold text-4xl mt-8 mb-3">List of cows</h1>
      {list.map((cow, i) => {
        return (
          <div>
            <tbody width="100">
              <td
                className="font-bold w-28"
                key={i}
                onClick={() => handleCow(cow)}
              >
                {cow.name}
              </td>
              <td>
                <button onClick={() => editow(cow.idcows)}>
                  <AiOutlineEdit className="text-green-500 font-bold text-xl mr-3" />
                </button>
              </td>
              <td>
                <button onClick={() => deleteCow(cow.idcows)}>
                  <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                </button>
              </td>
            </tbody>
          </div>
        );
      })}
    </div>
  );
}

export default List;
