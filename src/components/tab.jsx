import styled from "styled-components";
import {useCallback, useState} from "react";

const TabBar = styled.div`
  max-width: ${state => state.size * 50}px;
  height: 48px;
  background-color: gray;
`;

const Category = styled.div`
  display: flex;
  max-width: ${state => state.size * 50}px;
  height: 45px;
  background-color: #eceaea;
`

const Item = styled.div`
  text-align: center;
  line-height: 45px;
  width: 50px;
  height: 45px;
  font-size: 13px;
  font-weight: bold;
  opacity: ${state => state.select === state.index ? "100%" : "30%"};;
  cursor: pointer;
`

const SlideBar = styled.div`
  margin-left: ${state => state.margin}px;
  width: 50px;
  height: 3px;
  background-color: #15b675;
  transition: .2s;
`

export const Tab = ({ items }) => {

    const [slide, setSlide] = useState(0);
    const [select, setSelect] = useState(0);

    const click = useCallback((id) => {
        setSlide(50 * id);
        setSelect(id)
    }, [slide, select])

    return(
        <TabBar size={items.length}>
            <Category sise={items.length}>
                { items.map((item) =>
                    <Item
                        select={select}
                        index={item.id}
                        key={item.id}
                        onClick={() => click(item.id)}
                    >
                        {item.name}
                    </Item>
                )}
            </Category>
            <SlideBar margin={slide}/>
        </TabBar>
    );
}