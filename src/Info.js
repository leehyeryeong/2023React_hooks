import { useState, useEffect } from "react";

const Info = () => {
  const[name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  //컴포넌트가 처음 마운트 될 때 2번 렌더링(실행)이 발생한다.
  //state(name 또는 nickname) 값이 변경될 때마다 렌더링이 발생한다.
  useEffect(() => {
    console.log("마운트 될 때만 실행됩니다.");
  }, []);

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