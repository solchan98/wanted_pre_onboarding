import styled from "styled-components";
import {useCallback, useState} from "react";

const Bar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: ${state => state.width + 15}px;
  height: 5px;
  background-color: gray;
  cursor: pointer;
  z-index: 1;
`

const Circle = styled.div`
  margin-top: -5px;
  width: 15px;
  height: 15px;
  background-color: ${state => state.curWidth >= state.index ? "#24a65c" : "gray"};
  border-radius: 15px;
  z-index: 2;
`;

const Status = styled.div`
  width: ${state => state.width + 15}px;
  height: ${state => state.height}px;
  border: 1px solid black;
  padding-right: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  text-align: right;
  line-height: ${state => state.height}px;
  font-weight: bold;
`;

const ConstantBar = styled.div`
  width: ${state => state.width + 15}px;
  margin-top: 20px;
  position: relative;
  display: flex;
  justify-content: space-between;
`

const ConstantBtn = styled.div`;
  width: 50px;
  height: 20px;
  font-size: 14px;
  border: 1px solid black;
  border-radius: 10px;
  left: ${state => state.index}px;
  text-align: center;
  line-height: 20px;
  background-color: #eceaea;
  cursor: pointer;
`;

const ColorBar = styled.div`
  position: absolute;
  height: 5px;
  background-color: #24a65c;
`;

const MoveCircle = styled.div`
  margin-top: -7px;
  position: absolute;
  width: 13px;
  height: 13px;
  background-color: #cb2828;
  border-radius: 15px;
  cursor: pointer;
  z-index: 999;
  border: 4px solid gray;
`

export const Slider = ({width = 400, height = 50}) => {

    const [curWidth, setCurWidth] = useState(width - width / 2);
    const [moving, setMoving] = useState(false);

    const click = useCallback((index) => {
        setCurWidth(index);
    }, []);

    const relativeClick = useCallback((e) => {
        e.preventDefault();
        const parentOffsetLeft = e.target.offsetParent.offsetLeft;
        if(moving) {
            setCurWidth(Math.max(0, Math.min(width, e.clientX - parentOffsetLeft - 10)));
        }
    }, [curWidth, moving])

    const barClick = useCallback((e) => {
        if(!moving) {
            setCurWidth(Math.max(0, Math.min(width, e.nativeEvent.offsetX - 10)));
        }
    }, [moving])

    const startMoving = useCallback(() => {
        setMoving(true);
    }, [])

    const changeMoving = useCallback(() => {
        setMoving(false);
    }, [])

    const constantBtnClick = useCallback((index) => {
        setCurWidth(index);
    }, [curWidth])

    return(
        <>
            <Status width={width} height={height}>
                {(curWidth / width * 100).toFixed(0)} %
            </Status>
            <Bar width={width} onMouseUp={(e) => barClick(e)}>
                <ColorBar style={{ width: `${curWidth}px`}}/>
                <MoveCircle style={{ left: `${curWidth}px`}}
                    onMouseDown={startMoving}
                    onMouseUp={changeMoving}
                    onMouseOut={changeMoving}
                    onMouseMove={(e) => relativeClick(e)}/>
                <Circle width={width} height={height} onClick={() => click(0)} curWidth={curWidth} index={0} />
                <Circle width={width} height={height} onClick={() => click(width / 4)} curWidth={curWidth} index={width / 4} />
                <Circle width={width} height={height} onClick={() => click(width / 4 * 2)} curWidth={curWidth} index={width / 4 * 2} />
                <Circle width={width} height={height} onClick={() => click(width / 4 * 3)} curWidth={curWidth} index={width / 4 * 3} />
                <Circle width={width} height={height} onClick={() => click(width / 4 * 4)} curWidth={curWidth} index={width / 4 * 4} />
            </Bar>
            <ConstantBar width={width} height={height}>
                <ConstantBtn onClick={() => constantBtnClick(4)} index={4}>1%</ConstantBtn>
                <ConstantBtn style={{marginLeft: "-16px"}} onClick={() => constantBtnClick(width / 4)} index={width / 4}>25%</ConstantBtn>
                <ConstantBtn onClick={() => constantBtnClick(width / 4 * 2)} index={width / 4 * 2}>50%</ConstantBtn>
                <ConstantBtn style={{marginRight: "-16px"}} onClick={() => constantBtnClick(width / 4 * 3)} index={width / 4 * 3}>75%</ConstantBtn>
                <ConstantBtn onClick={() => constantBtnClick(width / 4 * 4)} index={width / 4 * 4}>100%</ConstantBtn>
            </ConstantBar>
        </>
    );
}