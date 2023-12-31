import React from 'react'
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

//완벽한 사용자 입력을 받기 위해서는 아래의 variables의 부분을 state를 사용해서 값을 넣어주면 된다.
export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables:{ //variables 이게 $의 역할을 해줌
        writer:"yeonsoo",
        title:"I'm gonna be a legend",
        contents:"Be a useful man"
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
  }

  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API</button>
    </div>
  )
}

