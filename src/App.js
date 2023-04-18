import {useState} from 'react';

const hardCalculate = (number) => {
  console.log('시간이 많이 걸리는 계산');
  for(let i = 0; i < 9999999999; i++) {
    return number + 10000;
  }
}

const easyCalculate = (number) => {
  console.log("시간이 짧게 걸리는 계산");
  return number + 1;
}

const App = () => {
  const [hardNumber, setHardNumber] = useState(1);
  //hardNumber = 1
  const [easyNumber, setEasyNumber] = useState(1);
  //easyNumber = 1

  const hardSum = hardCalculate(hardNumber);
  const easySum = hardCalculate(easyNumber);

  return (
    <div>
      <h1>시간이 많이 걸리는 계산</h1>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>

      <h1>시간이 짧게 걸리는 계산</h1>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span>+ 1 = {easySum}</span>
    </div>
  );
};

export default App;