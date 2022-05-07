import {useCallback, useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const Backboard = styled.div`
  position: relative;
  line-height: ${state => state.height}px;
  display: flex;
  width: ${state => state.width}px;
  height: ${state => state.height}px;
  border-radius: ${state => state.width / 2}px;
  background-color: #e8e6e6;
`;

const Circle = styled.div`
  transition: .2s;
  top: 4px;
  left: ${state => state.left}px;
  position: absolute;
  border-radius: ${state => state.width - 8}px;
  width: ${state => state.width / 2}px;
  height: ${state => state.height - 8}px;
  z-index: 1;
  background-color: #FFF;
`;

const Item = styled.div`
  font-weight: bold;
  font-size: ${state => state.fontSize}px;
  overflow: hidden;
  text-align: center;
  width: ${state => state.width}px;
  height: ${state => state.height}px;
  z-index: 2;
  opacity: ${state => state.clicked === state.keys ? "100%" : "30%"};
  cursor: pointer;
`;

function Toggle ({width, height, fontSize}) {

  const [clicked, setClicked] = useState(0);
  const [left, setLeft] = useState(4);

  const click = useCallback((index) => {
    if (index === 0) {
      setLeft(width / 2 * index + 4);
    } else {
      setLeft(width / 2 * index - 4);
    }
    setClicked(index);
  }, [width]);

  return (
    <Backboard width={width} height={height}>
      <Circle width={width} height={height} left={left}/>
      <Item
        width={width}
        height={height}
        clicked={clicked}
        keys={0}
        onClick={() => click(0)}
        fontSize={fontSize}>기본
      </Item>
      <Item
        width={width}
        height={height}
        clicked={clicked}
        keys={1}
        onClick={() => click(1)}
        fontSize={fontSize}>상세
      </Item>
    </Backboard>
  );
}

Toggle.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
};

export default Toggle;