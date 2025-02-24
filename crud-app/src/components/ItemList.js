import { useContext } from "react";
import { ItemContext } from "../components/ItemContext";
import { Link } from "react-router-dom";

const ItemList = () => {
  const { items, deleteItem } = useContext(ItemContext);

  return (
    <div className="p-4">
      {items.length === 0 ? <p>No items found.</p> : (
        items.map((item) => (
          <div key={item.id} className="flex justify-between bg-gray-100 p-2 mb-2 rounded">
            <span>{item.name}</span>
            <div>
              <Link to={`/edit/${item.id}`} className="text-blue-500 mr-2">Edit</Link>
              <button onClick={() => deleteItem(item.id)} className="text-red-500">Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
