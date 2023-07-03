import {useState} from 'react'

export default function LoginStatePage(){
  const [userID, setUserID] = useState("")
  const [pass]

  function onChangeID(event){
    console.log(event)
    console.log(event.target)
    console.log(event.target.value)
  }

  function onClickPW(){
    
  }

  return (
    <>
      <div>아이디 : <input type="text" onChange={onChangeID}/> </div>
      <div>비밀번호: <input type="password" onClick={onClickPW}/> </div>
    </>
  )
}