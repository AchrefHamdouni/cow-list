import React, { useState } from "react";
import Axios from "axios";

function AddCow({ list }) {
  //     <div className="bg-blue-100 mt-2 flex flex">
  //       <div className="font-bold text-blue-500 ml-20 text-xl">
  //         ADD COW
  //       </div>
  //       <form>
  //         <div className="my-6 text-xl">
  //           <span className="font-bold mr-16 ">Name: </span>
  //           <input
  //             className="bg-blue-300 "
  //             id="name"
  //             type="text"
  //             onChange={(e) => {
  //               setName(e.target.value);
  //             }}
  //           />
  //         </div>
  //         <div>
  //           <span className="font-bold mr-4 text-xl content-center ">
  //             Description:
  //           </span>
  //           <input
  //             className="bg-blue-300 w-3/5 h-10"
  //             id="cowDescription"
  //             type="text"
  //             onChange={(e) => {
  //               setDescription(e.target.value);
  //             }}
  //           />
  //         </div>
  //         <button
  //           className=" ml-48 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
  //           id="submit"
  //           type="sumbit"
  //           onClick={(event) => handleSubmit(event)}
  //         >
  //           Add Cow
  //         </button>
  //       </form>
  //     </div>
  //   );
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const cowAdd = () => {
    Axios.post("http://localhost:3000/api/cows", {
      name: name,
      description: description,
    }).then((response) => console.log(response));
  };

 

  return (
    <div className="bg-blue-100 mt-2 flex flex">
      <div className="font-bold text-blue-500 ml-20 text-2xl">ADD COW</div>
      <form className="font-bold my-6 text-xl">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          defaultValue={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button
          onClick={cowAdd}
          className=" ml-48 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddCow;
