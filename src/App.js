import { useEffect, useState, useCallback } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const someFunction = useCallback(() => {
    console.log(`someFunc : number : ${number}`);
    return;
  }, [number]);

  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);
  return (
    <div>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <br/>
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  );
};

export default App;