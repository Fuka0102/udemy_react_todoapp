import React from "react";
import "./styles.css";

export const App = () => {
  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力"></input>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <li className="list-row">
            ああああ
            <button>完了</button>
            <button>削除</button>
          </li>
          <li className="list-row">
            ああああ
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <li className="list-row">
            ああああ
            <button>戻す</button>
          </li>
          <li className="list-row">
            ああああ
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </>
  );
};
