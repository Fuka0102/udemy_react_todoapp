import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incomplementTodos, setImcompleteTodos] = useState([
    "ああああ",
    "いいいい",
  ]);
  const [complementTodos, setCompleteTodos] = useState(["うううう"]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incomplementTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText();
  };
  const onClickDelete = (index) => {
    const newTodos = [...incomplementTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };
  const onClickComplete = (index) => {
    const newIncomplementTodos = [...incomplementTodos];
    newIncomplementTodos.splice(index, 1);
    setImcompleteTodos(newIncomplementTodos);
    setCompleteTodos([...complementTodos, incomplementTodos[index]]);
  };
  const onClickBack = (index) => {
    const newComplementTodos = [...complementTodos];
    newComplementTodos.splice(index, 1);
    setCompleteTodos(newComplementTodos);
    setImcompleteTodos([...incomplementTodos, complementTodos[index]]);
  };

  return (
    <>
      <div value={todoText} className="input-area" onChange={onChangeTodoText}>
        <input placeholder="TODOを入力"></input>
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incomplementTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complementTodos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                {todo}
                <button onClick={() => onClickBack(index)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
