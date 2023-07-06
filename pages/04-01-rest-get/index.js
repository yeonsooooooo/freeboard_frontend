//rest api 통신에서 값을 비동기 함수를 동기적으로 가져옴.
// 가져온 데이터를 state를 사용해 화면에 표현하는 것 까지.

import axios from 'axios'
import { useState } from 'react'

export default function RestGetPage(){
  const [title, setTitle] = useState("")

  function onClickAsync(){
    //axios : 어플에서 서버와 통신하기 위해 사용하는 HTTP 클라이언트 라이브러리
    //기본적으로 비동기 함수. 따라서 동기 처리가 필요할 때가 있음. --> await async 사용
    const result = axios.get("https://koreanjson.com/posts/1")
    console.log(result)
  }

  //async function onClickSync(){
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1")
    console.log(result)
    setTitle(result.data.title)
  }

  return (
    <>
      <button onClick={onClickAsync}>REST-API 비동기 요청하기</button>
      <button onClick={onClickSync}>REST-API 동기 요청하기</button>
      <div>{title}</div>
    </>
  )
}
