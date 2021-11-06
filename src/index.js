// Reactのコンポーネントを利用する場合は必ず必要
import React from 'react';
import ReactDom from 'react-dom';   // index.htmlに反映するため
import App from './App';

// アロー関数
/*
const App = () => {
  return (
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
}
*/

// APPを画面に反映させる　APPをコンポーネントとしてレンダリングを行う、第二引数は反映先
ReactDom.render( <App />, document.getElementById("root"));


