import { useState, useEffect } from "react";

const Info = () => {
  const[name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  //useEffect의 두번째 인자값을 [name]으로 표시하면
  //state의 name 값이 변경 될 때마다 실행한다.
  useEffect(() => {
    console.log("effect");
    console.log(name);

    //cleanup 함수
    //업데이트 되기 직전에 호출한다.
    //컴포넌트가 화면에서 사라질 때(언마운트) 호출한다.
    return() => {
      console.log("cleanup");
      console.log(name);
    }
  }, [name]);

  const onChangeName = (e) => {
    setName(e.target.value);
    //e.target.value는 input 박스의 내용을
    //name에게 저장
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
    //e.target.value는 input 박스의 내용을
    //nickname에게 저장
  };

  return(
    <div>
      <div>
        <input value={name} onChange={onChangeName}/> 
        <input value={nickname} onChange={onChangeNickname}/> 
      </div>
      <div>
        <div>
          <b>이름: </b>{name}
        </div>
        <div>
          <b>닉네임: </b>{nickname}
        </div>
      </div>
    </div>
  );
}

export default Info;