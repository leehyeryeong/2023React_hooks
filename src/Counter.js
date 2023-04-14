import { useReducer } from "react";

function reducer(state, action) { //action이 type: "INCREMENT"를 받음
  switch(action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value + 1};
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});
  //useReducer 함수의 첫번째 인자는 reducer 함수를 나타내는 것
  //value: 0는 state값

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({type: "INCREMENT"})}>+1</button>
      <button onClick={() => dispatch({type: "DECREMENT"})}>-1</button>
      {/* dispatch({type: "INCREMENT"}) 이 문장은 function reducer(state, action)를 */}
      {/* 호출하는 것으로 파라미터 값은 type: "INCREMENT"로 전달 */}
    </div>
  ); 
};

export default Counter;