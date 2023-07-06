import React from 'react'
import {gql, useMutation} from '@apollo/client'

//gql은 미리 만들어두고 이걸로 요청을 보내는 구조
//gql `` 안에 넣고, 이걸 useMutation 함수로 호출한다.
const CREATE_BOARD = gql`
  mutation{
    createBoard(writer: "철수", title:"제목입니다 ~", contents:"내용이에요"){
      _id
      number
      message
    }
  }
`

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    const result = await 나의함수()
    console.log(result)
  }

  return (
    <div>
      <button onClick={onClickSubmit}>GRAPHQL-API</button>
    </div>
  )
}

