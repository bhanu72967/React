import styled from "styled-components";
import NumberSeleter from "./NumberSeleter";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const PlayGame = () => {
  return (
    <MainContainer>
      <div className="top">
        <TotalScore />
        <NumberSeleter />
      </div>
      <RollDice />
    </MainContainer>
  );
};

export default PlayGame;

const MainContainer = styled.main`
  padding-top: 70px;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
`;
