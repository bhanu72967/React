import { useContext } from "react";
import { ItemContext } from "../components/ItemContext";
import ItemForm from "../components/ItemForm";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  const { items, updateItem } = useContext(ItemContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>
      <ItemForm initialValues={item} onSubmit={(updatedItem) => {
        updateItem(parseInt(id), updatedItem);
        navigate("/");
      }} />
    </div>
  );
};

export default EditItem;
