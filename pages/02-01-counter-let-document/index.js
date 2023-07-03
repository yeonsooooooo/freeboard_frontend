//import React, { Component } from 'react';
export default function CounterLetDocumentPage(){

  function onClickCountUp(){
    const count = Number(document.getElementById("count".innerText)) + 1
    document.getElementById("count").innerText = count
  }

  function onClickCountDown(){
    const count = Number(document.getElementById("count".innerText)) + 1
    document.getElementById("count").innerText = count
  }

  return (
    <div>
      <div id="count">0</div>
      <botton onClick={onClickCountUp}>카운트 올리기</botton>
      <botton onClick={onClickCountDown}>카운트 내리기</botton>
    </div>
  )
}