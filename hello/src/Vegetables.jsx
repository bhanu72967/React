import Vegetable from "./Vegetable";

const Vegetables = () => {
  const VegetableList = [
    { name: "Tomato", price: 20, emoji: "🍅" },
    { name: "Carrot", price: 30, emoji: "🥕" },
    { name: "Onion", price: 10, emoji: "🧅" },
    { name: "Cucumber", price: 40, emoji: "🥒" },
    { name: "Pumpkin", price: 40, emoji: "🎃" },
  ];
  return (
    <div>
      {VegetableList.map((Veg, i) => {
        <Vegetable
          key={i}
          name={Veg.name}
          price={Veg.price}
          emoji={Veg.emoji}
        />;
      })}
    </div>
  );
};

export default Vegetables;
