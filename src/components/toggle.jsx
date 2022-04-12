import styled from "styled-components";
import {useCallback, useState} from "react";

const Backboard = styled.div`
  position: relative;
  line-height: 30px;
  display: flex;
  width: 200px;
  height: 30px;
  border-radius: 100px;
  background-color: #e8e6e6;
`;

const Circle = styled.div`
  transition: .2s;
  top: 2px;
  left: ${state => state.leftMargin}px;
  position: absolute;
  border-radius: 40px;
  width: 100px;
  height: 26px;
  z-index: 1;
  background-color: #FFF;
`;

const Item = styled.div`
  font-weight: bold;
  text-align: center;
  width: 200px;
  height: 30px;
  z-index: 2;
  opacity: ${state => state.clicked === state.keys ? "100%" : "30%" };
  cursor: pointer;
`;

export const Toggle = () => {

    const [clicked, setClicked] = useState(0);
    const [leftMargin, setLeftMargin] = useState(2);

    const click = useCallback((index) => {
        if(index === 0) {
            setLeftMargin(100 * index + 2);
        } else {
            setLeftMargin(100 * index - 2);
        }
        setClicked(index);
    }, []);

    return(
        <Backboard>
            <Circle leftMargin={leftMargin} />
            <Item clicked={clicked} keys={0} onClick={() => click(0)}>기본</Item>
            <Item clicked={clicked} keys={1} onClick={() => click(1)}>상세</Item>
        </Backboard>
    );
}