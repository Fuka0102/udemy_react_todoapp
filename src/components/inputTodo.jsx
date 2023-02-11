import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div value={todoText} className="input-area" onChange={onChange}>
      <input placeholder="TODOを入力"></input>
      <button onClick={onClick}>追加</button>
    </div>
  );
};
