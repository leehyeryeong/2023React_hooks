import { useState, useEffect } from "react";

const Info = () => {
  const[name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log("effect");
    return() => {
      console.log("unmount");
    };
  }, []); //2번째 인자를 값이 없는 배열로 표현하면 언마운트 된다.

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