import { useState } from "react";

const ItemForm = ({ onSubmit, initialValues }) => {
  const [name, setName] = useState(initialValues?.name || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <input
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default ItemForm;
