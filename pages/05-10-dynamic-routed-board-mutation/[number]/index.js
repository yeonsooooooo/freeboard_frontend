import React from 'react';
import {useQuery, gql} from "@apollo/client"
import {useRouter} from "next/router"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
    }
  }
`
//동적 라우팅 : qqq라는 변수안에 원하는 페이지 값을 받아온다.
//주소 관련된 역할은 모두 '리우터'가 해주기 때문에, 라우터가 qqq 값을 가지고 있다.
export default function StaticRoutedPage(){
  const router = useRouter()
  
  console.log(router.query.number)

  const {data} = useQuery(FETCH_BOARD, {
    variables:{  number: Number(router.query.number)
      //여기에 이동해야하는 페이지 숫자가 들어가는 곳
  }})
 
  console.log(data)

  
  return(
    <>
      <div>{router.query.number}번 게시글로 이동이 완료되었습니다. </div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div>

      <div>작성자: {data ? data.fetchBoard.writer: "로딩중입니다..."}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  )
}
//이렇게 useQuery를 사용하는 방식이 비동기로 빠르게 사용자에게 보여줄 수 있기 때문에 효율적이다. await 필요없이 이 경우는 && 조건문 활용
//맨마지막이 최근에 나온 옵셔널 체이닝 방식