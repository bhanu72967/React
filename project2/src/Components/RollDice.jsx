import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
  };

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/image/Dice/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
