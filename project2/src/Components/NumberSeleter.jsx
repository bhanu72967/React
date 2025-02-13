import { useState } from "react";
import styled from "styled-components";
const NumberSeleter = () => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];
  const [number, setNumber] = useState();
  return (
    <Row>
      <div className="flex">
        {arrayNumber.map((el, i) => (
          <Box isSeleted={el === number} key={i} onClick={() => setNumber(el)}>
            {el}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Row>
  );
};

export default NumberSeleter;

const Row = styled.div`

display: flex;
flex-direction: column;
align-items: end;
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSeleted ? "black" : "white")};
  color: ${(props) => (!props.isSeleted ? "black" : "white")};
  cursor: pointer;
`;
