import { useState } from "react";
import Timer from "./component/Timer";

const App = () => {
  const [showTimer, setShowTimer] = useState(false);
  return(
    <div>
      {showTimer && <Timer/>}
      <button onClick = {() => setShowTimer(!showTimer)}>
        Toggle
      </button>
    </div>
  );
}

export default App;