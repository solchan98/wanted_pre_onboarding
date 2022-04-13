import styled from "styled-components";
import {useCallback, useState} from "react";

const TabBar = styled.div`
  max-width: ${state => state.size * state.width}px;
  height: ${state => state.height - 5}px;
  background-color: gray;
`;

const Category = styled.div`
  display: flex;
  max-width: ${state => state.size * 50}px;
  height: ${state => state.height - 5}px;
  background-color: #eceaea;
  overflow: hidden;
`

const Item = styled.div`
  text-align: center;
  line-height: ${state => state.height - 5}px;
  width: ${state => state.width}px;
  height: ${state => state.height - 5}px;
  font-size: ${state => state.fontSize}px;
  font-weight: bold;
  opacity: ${state => state.select === state.index ? "100%" : "30%"};;
  cursor: pointer;
`

const SlideBar = styled.div`
  margin-left: ${state => state.margin}px;
  width: ${state => state.width}px;
  height: 3px;
  background-color: #15b675;
  transition: .2s;
`

export const Tab = ({ items, width = 50, height =  50, fontSize = 14}) => {

    const [slide, setSlide] = useState(0);
    const [select, setSelect] = useState(0);

    const click = useCallback((id) => {
        setSlide(width * id);
        setSelect(id)
    }, [slide, select])

    return(
        <TabBar size={items.length} width={width} height={height}>
            <Category sise={items.length} width={width} height={height}>
                { items.map((item) =>
                    <Item
                        select={select}
                        index={item.id}
                        key={item.id}
                        onClick={() => click(item.id)}
                        width={width} height={height} fontSize={fontSize}
                    >
                        {item.name}
                    </Item>
                )}
            </Category>
            <SlideBar margin={slide} width={width}/>
        </TabBar>
    );
}