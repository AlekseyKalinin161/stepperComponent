
import './App.css';
import VerticalLinearStepper from "./stepperComponent/stepperComponent";
import React from "react";

function App() {

    const [state, setState] = React.useState({});

  return (
      <div>
          <VerticalLinearStepper state={state} setState={setState}/>
      </div>
     );
}

export default App;
