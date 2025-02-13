import { useState } from "react";
import "./DiceGame.css";

const DiceGame = () => {
  const [bet, setBet] = useState({ name: "", number: 1, amount: "" });
  const [rolledNumber, setRolledNumber] = useState(1);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  const DiceNumber = [1, 2, 3, 4, 5, 6];

  const handleBet = (e) => {
    e.preventDefault();
    if (bet.name && bet.amount > 0) {
      setPlayers([...players, { ...bet, id: Date.now() }]);
      const newRoll = Math.floor(Math.random() * 6) + 1;
      setRolledNumber(newRoll);

      const newResults = [
        {
          name: bet.name,
          message:
            newRoll === Number(bet.number)
              ? `Congratulations ${bet.name}! You won $${bet.amount}! Rolled: ${newRoll}`
              : `Sorry ${bet.name}, you lost. Rolled: ${newRoll}. Better luck next time!`,
        },
      ];
      setResults(newResults);
    }
  };

  return (
    <div className="head-container">
      <h1 className="head">Dice Betting Game</h1>
      <div className="dice-container">
        <div className="dice" onClick={handleBet}>
          <img src={`/images/Dice/dice_${rolledNumber}.png`} alt="dice1" />
        </div>
        <p>Click on Dice to Roll</p>

        <form onSubmit={handleBet} className="form">
          <input
            type="text"
            value={bet.name}
            placeholder="Name"
            className="w-full p-2 border rounded"
            onChange={(e) => setBet({ ...bet, name: e.target.value })}
          />
          <select
            value={bet.number}
            onChange={(e) => setBet({ ...bet, number: e.target.value })}
          >
            {DiceNumber.map((number) => (
              <option key={number} value={number}>
                Number {number}
              </option>
            ))}
          </select>
          <input
            type="number"
            value={bet.amount}
            min={1}
            placeholder="Bet Amount"
            onChange={(e) => setBet({ ...bet, amount: e.target.value })}
          />
          <button type="submit">Bet</button>
        </form>
        <div>
          <h2>current Bets</h2>
          {players.length === 0 ? (
            <p>No bets placed yet</p>
          ) : (
            <ul>
              {players.map((player) => (
                <li key={player.id}>
                  {player.name} - ${player.amount} on {player.number}
                </li>
              ))}
            </ul>
          )}
          {results.length > 0 &&
            results.map((result, index) => <p key={index}>{result.message}</p>)}
        </div>
      </div>
    </div>
  );
};

export default DiceGame;
