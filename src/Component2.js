import React from "react";
import Store from "./context/context";

function App() {
    const {state} = React.useContext(Store)
  return (
    <div className="App">
        {JSON.stringify(state)}
    </div>
  );
}

export default App;
