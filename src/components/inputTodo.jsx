import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div value={todoText} className="input-area" onChange={onChange}>
      <input disabled={disabled} placeholder="TODOを入力"></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
