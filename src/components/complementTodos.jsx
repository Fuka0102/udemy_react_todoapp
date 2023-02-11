import React from "react";

export const ComplementTodos = (props) => {
  const { complementTodos, onClickBack } = props;
  return (
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
  );
};
