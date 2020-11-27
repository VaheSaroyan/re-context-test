import React from "react";
import Store from "./context/context";
import {getState} from './context/index'

function App() {
    const {dispatch} = React.useContext(Store)
    return (
        <div className="App">
            component1
            <button onClick={() => {
                dispatch({type: 'increment'})
            }}>increment</button>
            <button onClick={() => {
                dispatch({type: 'decrement'})
            }}>decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'valodik',value:'vagrik'})
            }}>valodik
            </button>
            <button onClick={() => {
                dispatch({type: 'valodik',value:'valodik'})
            }}>vagrik
            </button>
            <p>Exapme:{JSON.stringify(getState())}</p>
        </div>
    );
}

export default App;
