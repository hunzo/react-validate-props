import "./App.css"
import Child from "./Child"


function App() {
    return (
        <div className="App">
            <h1>Validate props</h1>
            <Child distance={1234} />
        </div>
    )
}

export default App
