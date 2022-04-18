import './App.css';
import {Toggle} from "./components/toggle";
import {Tab} from "./components/tab";
import {Dropdown} from "./components/Dropdown";
import {Input} from "./components/input";
import {Slider} from "./components/slider";
import {animals} from "./contstant/tab";
import styled from "styled-components";

const DIV = styled.div`
    margin: 50px;
`;


function App() {
    return (
        <div className="App">
            <Toggle width={200} height={40} fontSize={16} />
            <DIV/>
            <Tab items={animals} width={100} height={50} fontSize={14} />
            <DIV/>
            <Slider width={400} height={50} />
            <DIV/>
            <Input width={300} height={40} fontSize={14}/>
            <DIV/>
            <Dropdown width={200} height={30} fontSize={14} />
        </div>
    );
}

export default App;
