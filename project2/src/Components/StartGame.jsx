import styled from "styled-components";
import PropTypes from "prop-types"

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="./image/dices.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle} >Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  height: 100vh;
  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;

StartGame.propTypes = {
  toggle: PropTypes.func.isRequired,
}
