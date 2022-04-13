import './App.css';
import {Toggle} from "./components/toggle";
import {Tab} from "./components/tab";

const animals = [
    { id: 0, name: "기린"},
    { id: 1, name: "사슴"},
    { id: 2, name: "고양이"},
]

function App() {
    return (
        <div className="App">
            {/*<Toggle width={600} height={80} fontSize={24} />*/}
            <Tab items={animals} width={100} height={50} fontSize={14} />
        </div>
    );
}

export default App;
