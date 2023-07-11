import React, { useState } from 'react'
import {gql, useMutation} from '@apollo/client'
import {useRouter} from 'next/router'

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
  const router  = useRouter()
  
  const [나의함수] = useMutation(CREATE_BOARD)
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")


  const onClickSubmit = async () => {
    try{
      const result = await 나의함수({
        variables:{ //variables 이게 $의 역할을 해줌
          writer: writer,
          title:title,
          contents:contents
        }
      })
      console.log(result)
      alert(result.data.createBoard.message)
    
      console.log(result.data.createBoard.number) // 게시글 번호, 근데 문자열 형태
      router.push("05-10-dynamic-routed-board-mutation/" + result.data.createBoard.number)
  
      //템플릿 리터럴 : 위랑 같음
      router.push(`05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`)
    } catch(error){
      //try에 있는 내용을 시도하다가 실패하면, 아랫줄 모두 무시!!! 하고 catch가 실행됨
      console.log(error.message)
      alert(error.message)
    }
  }
  //result.data.createBoard.number는 백엔드에서 받아온 게시글 number값
  //그 숫자가 05-10의 동적 라우팅 number로 넘어가게 된다. 


    

  //데이터를 보낼 때 'state'에 담아서 보내야함.
  //이벤트 핸들러 함수 작성 후, 아래에서 바인딩 해주기.
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
  //바인딩 해주는 부분.
  return (
    <div>
      작성자 : <input type="text" onChange={onChangeWriter}/><br/>
      제목 : <input type="text" onChange={onChangeTitle}/><br/>
      내용 : <input type="text" onChange={onChangeContents}/><br/>
      <button onClick={onClickSubmit}>GRAPHQL-API</button>
    </div>
  )
}

