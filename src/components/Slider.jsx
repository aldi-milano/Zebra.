import {
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: coral;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
`;

function SlideContain() {
  return (
    <Container>
      <Arrow direction="left" >
        <KeyboardArrowLeftOutlined />
      </Arrow>
      <Arrow direction="right" >
        <KeyboardArrowRightOutlined />
      </Arrow>
    </Container>
  );
}

export default SlideContain;
