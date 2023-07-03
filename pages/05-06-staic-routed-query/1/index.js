import React from 'react';
import {useQuery, gql} from "@apollo/client"

const FETCH_BOARD = gql`
  query {
    fetchBoard(nuber: 1){
      writer
      title
      contents
    }
  }
`

export default function StaticRoutedPage(){
  const {data} = useQuery(FETCH_BOARD)

  return(
    <div>1번 게시글로 이동이 완료되었습니다. </div>
  )
}