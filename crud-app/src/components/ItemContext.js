import { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => setItems([...items, { id: Date.now(), ...item }]);
  const updateItem = (id, updatedItem) =>
    setItems(items.map((item) => (item.id === id ? updatedItem : item)));
  const deleteItem = (id) =>
    setItems(items.filter((item) => item.id !== id));

  return (
    <ItemContext.Provider value={{ items, addItem, updateItem, deleteItem }}>
      {children}
    </ItemContext.Provider>
  );
};
