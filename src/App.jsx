import React from 'react';
import ColorfulMessage from './componets/ColorfulMessage';

const App = () => {
  const onClickButton = () => alert();
  // おぶじぇくとの変数をまとめて作成可能

  return (
    <>
      <h1 style={{color:'red'}}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  )
}
// <button onClick={onClickButton}> {}←の中はjavascriptが記載できる
// {{}} 外側の{}はjavascript 内側はjavascriptのオブジェクト


// 他のファイルでも利用できるようにする
export default App;