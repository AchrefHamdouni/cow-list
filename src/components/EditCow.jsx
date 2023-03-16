import React from 'react'

function EditCow({name,setName,description,setDescription}) {
  
  return (
    <div className="bg-gray-300 mt-2 flex flex">
    <div className="font-bold text-blue-500 ml-20 text-2xl">Edit Cow</div>
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
       
        className=" ml-48 mb-5 mt-5 bg-blue-700 text-white font-bold  py-2 px-2 rounded shadow border-2 border-gray-300 hover:bg-transparent hover:text-gray-500 transition-all duration-300"
        type="submit"
      >
        Edit
      </button>
    </form>
  </div>
  )
}

export default EditCow
