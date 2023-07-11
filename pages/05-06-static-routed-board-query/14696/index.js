import React from 'react';
import {useQuery, gql} from "@apollo/client"

const FETCH_BOARD = gql`
  query fetchBoard($number: Int){
    fetchBoard(number: $number){
      writer
      title
      contents
    }
  }
`
//useMutation과 useQuery 차이
//useMutation: 호출할 때 실행된다.
//useQuery : 페이지가 열리자마자 자동으로 실행
// 위와 같은 차이 때문에, 동적으로 사용하기 위해서는
//useQuery는 사용하면서 바로 variables ~ 이렇게 해주어야 한다.
export default function StaticRoutedPage(){
  //useQuery 는 { } 를 사용해서 감싸줌.
  // const {data} = useQuery(FETCH_BOARD)
  const {data} = useQuery(FETCH_BOARD, {
    variables:{
      number : 14696
      //$number가 아닌 이유는 variables가 $의 역할을 해줌.
      //위에 fetchBoard의 number로 들어가게됨.
    }
  })

  console.log(data)

  //여기서 중요한 것 !! useQuery 는 page 실행하자마자 바로 실행되게 설계되어서 아무런 처리 없이 data를 사용하면 undefined로 출력
  //undefined는 await 하지 않아도 나중에 알아서 받아오면 재실행됨.
  // data && data.fetchBoard.writer 처리만 해주어도 data 들어왔을 때 보여주게 됨.
  return(
    <>
      {/* <div>1번 게시글로 이동이 완료되었습니다. </div>
      <div>작성자: {data && data.fetchBoard.writer}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data && data.fetchBoard.contents}</div> */}

      <div>작성자: {data ? data.fetchBoard.writer: "로딩중입니다..."}</div>
      <div>제목 : {data && data.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
    
  )
}
//이렇게 useQuery를 사용하는 방식이 비동기로 빠르게 사용자에게 보여줄 수 있기 때문에 효율적이다. await 필요없이 이 경우는 && 조건문 활용
//맨마지막이 최근에 나온 옵셔널 체이닝 방식