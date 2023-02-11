import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/inputTodo";
import { IncomplementTodos } from "./components/incomplementTodos";
import { ComplementTodos } from "./components/complementTodos";

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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <IncomplementTodos
        incomplementTodos={incomplementTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <ComplementTodos
        complementTodos={complementTodos}
        onClickBack={onClickBack}
      />
    </>
  );
};
