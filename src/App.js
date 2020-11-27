import React from "react";
import Reducer from "./context";
import Component1 from "./Component1";
import Component2 from "./Component2";
import './helper'



function App() {


  return (
    <Reducer>
      <Component1/>
      <Component2/>
    </Reducer>
  );
}

export default App;
