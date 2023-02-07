import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incomplementTodos, setImcompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);
  const [complementTodos, setCompleteTodos] = useState(["うううう"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplementTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button>完了</button>
                <button>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complementTodos.map((todo) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
