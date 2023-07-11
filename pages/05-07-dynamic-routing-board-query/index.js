import {useRouter} from 'next/router'

export default function StaticRoutingPage(){
  
  const router = useRouter()

  const onClickMove1 = () =>{
    router.push("/05-08-dynamic-routed-board-query/1")
  }
  const onClickMove2 = () =>{
    router.push("/05-08-dynamic-routed-board-query/2")
  }
  const onClickMove100 = () =>{
    router.push("/05-08-dynamic-routed-board-query/100")
  }
  const onClickMove14696 = () =>{
    router.push("/05-08-dynamic-routed-board-query/1111")
  }

  //아래와 같이 router를 사용해서 각 페이지로 이동할 수 있다.
  //각 페이지에서는 variables의 number 값을 수정하여 원하는 게시글을 불러올 수 있다.
  return(
    <>
    <button onClick={onClickMove1}>1번 게시글 이동하기 </button>
    <button onClick={onClickMove2}>2번 게시글 이동하기 </button>
    <button onClick={onClickMove100}>100번 게시글 이동하기 </button>
    <button onClick={onClickMove14696}>14696번 게시글 이동하기 </button>
    </>
  
  )
}