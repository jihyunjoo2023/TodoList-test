import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [users, setUsers] = useState([
    {
      id: 1,
      content: "리액트 숙련 강의 완강하기",
      state: false
    },
    {
      id: 2,
      content: "이노캠 주특기 1주차 테스트 치기",
      state: false
    }
  ]);

  const [content, setWord] = useState('');


  const ageChangeHandler = (event) => {
    setWord(event.target.value);
  };

  //추가버튼 클릭

  const clickAddButtonHandler = () => {

    const newUser = {
      id: users.length + 1,
      content: content,
      state: false
    }

    setUsers([...users, newUser]) // 불변객체 유지
  };



  return (
    <div className="container">
      <div className="todoContainer">
        <div class="middleBox">
          <input value={content} onChange={ageChangeHandler} />&nbsp;
          <button onClick={clickAddButtonHandler}>추가하기</button>
        </div>
        <div className="TodoList">
          <h1>Todo List</h1>
        </div>
        <div className="app-style">
          {/* state에 따른 조건부 설정이 누락되어서 문제 */}
          {users.filter(item => item.state === false).map(function (item) {
            return <User
              key={item.id}
              item={item}


            />;
          })}

        </div>
      </div>
    </div>


  );
};


const User = ({ item }) => {

  return (
    <div key={item.id} className="component-style">
      <div className="contentBox">{item.content}</div>

    </div>
  );
};

export default App;