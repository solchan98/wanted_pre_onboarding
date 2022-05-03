import styled from "styled-components";
import {useCallback, useEffect, useRef, useState} from "react";
import {useListOutsideMouse} from "../hooks/useListOutsideMouse";
import {ITEM_LIST} from "../contstant/dropdown";

const MainBox = styled.div`
  width: ${state => state.width}px;
  height: ${state => state.height}px;
  background-color: #f1f1f1;
  border: 1px solid black;
  border-radius: 3px;
  margin-bottom: 5px;
  color: gray;
  line-height: ${state => state.height}px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
`;

const ItemBox = styled.div`
  width: ${state => state.width}px;
  height: ${state => state.isOpen ? "auto" : "0"};
  background-color: #f1f1f1;
  border: ${state => state.isOpen ? "1px solid gray" : null};
  border-radius: 3px;
  overflow: hidden;
  box-sizing: border-box;
`;

const Input = styled.input`
  display: block;
  border: 0;
  width: inherit;
  height: ${state => state.height}px;
  &:focus {
    outline: none;
  }
`;

const Item = styled.div`
  width: inherit;
  height: ${state => state.height}px;
  line-height: ${state => state.height}px;
  color: gray;
  font-size: ${state => state.fontSize}px;
  padding-left: 10px;
  cursor: pointer;
  margin-bottom: 5px;
`

export const Dropdown = ({width = 200, height = 30, fontSize = 16}) => {

    const [selectItem, setSelectItem] = useState("All Symbols");
    const [isOpen, setIsOpen] = useState(false);
    const [inputTxt, setInputTxt] = useState("");
    const [items, setItems] = useState(ITEM_LIST);

    const clickMainBox = useCallback(() => {
        setIsOpen(true);
    }, [])

    const changeSelectItem = useCallback((value) => {
        setSelectItem(value);
        setIsOpen(false);
        setInputTxt("");
    }, [selectItem])

    const onInputChange = useCallback((e) => {
        setInputTxt(e.target.value);
    }, [inputTxt])

    const ref = useRef();
    useListOutsideMouse(ref, {isOpen, setIsOpen}, setInputTxt);

    useEffect(() => {
        if(inputTxt === "") {
            setItems(ITEM_LIST);
        } else {
            let strings = ITEM_LIST.filter(item => item.startsWith(inputTxt.toUpperCase()) || item.startsWith(inputTxt.toLowerCase()));
            setItems(strings);
        }
    }, [inputTxt])


    return(
        <div style={{maxWidth: "200px"}} ref={ref}>
            <MainBox width={width} height={height} onClick={clickMainBox} >{selectItem}</MainBox>
            <ItemBox width={width} isOpen={isOpen}>
                <Input height={height} onChange={onInputChange} placeholder="Search Symbol" value={inputTxt}/>
                <Item height={height} fontSize={fontSize} onClick={() => changeSelectItem("ALL Symbols")}>All Symbols</Item>
                {items.map((value, key) =>
                <Item
                    key={key}
                    height={height}
                    fontSize={fontSize}
                    onClick={() => changeSelectItem(value)}
                >{value}</Item>)}
            </ItemBox>
        </div>
    );
}