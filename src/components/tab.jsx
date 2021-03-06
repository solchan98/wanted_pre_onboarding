import {useCallback, useState} from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { ANIMALS } from "../contstant/tab";

const TabBar = styled.div`
  width: ${state => state.size * state.width}px;
  height: ${state => state.height - 5}px;
  background-color: gray;
`;

const Category = styled.div`
  display: flex;
  width: ${state => state.size * 50}px;
  height: ${state => state.height - 5}px;
  background-color: #eceaea;
  overflow: hidden;
`;

const Item = styled.div`
  text-align: center;
  line-height: ${state => state.height - 5}px;
  width: ${state => state.width}px;
  height: ${state => state.height - 5}px;
  font-size: ${state => state.fontSize}px;
  font-weight: bold;
  opacity: ${state => state.select === state.index ? "100%" : "30%"};;
  cursor: pointer;
`;

const SlideBar = styled.div`
  margin-left: ${state => state.margin}px;
  width: ${state => state.width}px;
  height: 3px;
  background-color: #15b675;
  transition: .2s;
`;

function Tab ({ items = ANIMALS, width = 50, height =  50, fontSize = 14}) {

  const [slide, setSlide] = useState(0);
  const [select, setSelect] = useState(0);

  const click = useCallback((id) => {
    setSlide(width * id);
    setSelect(id);
  }, [width]);

  return(
    <TabBar size={items.length} width={width} height={height}>
      <Category sise={items.length} width={width} height={height}>
        { items.map((item) =>
          <Item
            select={select}
            index={item.id}
            key={`item_${item.id}`}
            onClick={() => click(item.id)}
            width={width} height={height} fontSize={fontSize}
          >
            {item.name}
          </Item>)}
      </Category>
      <SlideBar margin={slide} width={width}/>
    </TabBar>
  );
}

Tab.propTypes = {
  items: PropTypes.shape([]),
  width: PropTypes.number,
  height: PropTypes.number,
  fontSize: PropTypes.number,
};

export default Tab;