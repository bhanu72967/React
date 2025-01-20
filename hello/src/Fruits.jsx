const Fruits = () => {
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
  return (
    <div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
