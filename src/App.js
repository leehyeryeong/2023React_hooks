import { useState } from "react";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr/>
      {visible && <Info/>}
      {/* visible 값이 true일 때 Info 컴포넌트를 렌더링 */}
      {/* visible 값이 false일 때 전체는 무조건 false이다 */}
      {/* 따라서 Info 컴포넌트는 작동하지 않는다. */}
    </div>
  );
};

export default App;