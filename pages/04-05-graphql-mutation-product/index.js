import React, { useState } from 'react'
import {gql, useMutation} from '@apollo/client'

//gql은 미리 만들어두고 이걸로 요청을 보내는 구조
//gql `` 안에 넣고, 이걸 useMutation 함수로 호출한다.

//사용자의 입력에 따라 다른 게시글을 생성해주기 위한 함수
const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title:$title, contents: $contents){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD)

  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables:{ //variables 이게 $의 역할을 해줌
        //variables 자체가 문법. 이거 그대로 써주면 된다.
        writer: writer,
        title:title,
        contents:contents
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  const onChangeWriter = (event) =>{
    setWriter(event.target.value)
  }
  const onChangeTitle = (event) =>{
    setTitle(event.target.value)
  }
  const onChangeContents = (event) =>{
    setContents(event.target.value)
  }
  //입력되는 값을 가져오기 위해서 onChange 속성 사용
  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter}/><br/>
      제목 : <input type="text" onChange={onChangeTitle}/><br/>
      내용 : <input type="text" onChange={onChangeContents}/><br/>
      <button onClick={onClickSubmit}>GRAPHQL-API</button>
    </div>
  )
}

