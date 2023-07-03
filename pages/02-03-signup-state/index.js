export default function SignStatePage(){
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailerror, setEmailerror] = useState("")
 
  function onChangeEmail(event){
    console.log(event) //나의 행동 : 여러가지의 데이터가 들어있음
    console.log(event.target)// 작동된 태그 : 그 중 target만 가져옴
    console.log(event.target.value)// 태그의 내용
    
    setEmail(event.target.value)
  }

  function onChangePassword(event){
    setPassword(event.target.value)
  }
  function onClickSignUp(){
    console.log(email)
    console.log(password)
  }

  function onClickSignUp(){
    console.log(email)
    console.log(password)

    if(email.include("@") == false){
      //alert("잘못된 이메일 형태에용")
      setEmailerror("잘못된 이메일 형태에용")
    }
    else{
      //backend 컴퓨터에 있는 api 함수 요청
      alert("회원가입을 축하합니당")
    }
  }
  return (
    <>
    여기의 값을
      이메일 : <input type="text" onChange={onChangeEmail} />
      <div>{emailerror}</div>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button onClick="onClickSignUp">
      회원가입
      </button>
    </>
  )
}