import { useContext } from "react";
import { ItemContext } from "../components/ItemContext";
import ItemForm from "../components/ItemForm";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const { addItem } = useContext(ItemContext);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Add Item</h2>
      <ItemForm onSubmit={(item) => { addItem(item); navigate("/"); }} />
    </div>
  );
};

export default AddItem;
