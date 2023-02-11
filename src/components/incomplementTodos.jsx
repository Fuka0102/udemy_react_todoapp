import React from "react";

export const IncomplementTodos = (props) => {
  const { incomplementTodos, onClickComplete, onClickDelete } = props;
  return (
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
  );
};
