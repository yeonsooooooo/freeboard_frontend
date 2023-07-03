//컴포넌트와 함수의 차이는 jsx 파일을 return 하는지 안하는지. 하면 컴포넌트
//이때 jsx 파일을 return 하려면 .tsx 파일 이여야 한다.
export default function Qqq(){
  let aaa: string = "안녕하세숑"

  let ccc : number = 10

  let eee: boolean = true

  let fff:number[] = [1,2,3,4,5]
  let ggg:string[] = ["철수", "영희","훈이"]
  let hhh:(string | number)[] = ["철수", 3]

  //객체타입을 명시해 주는 법
  interface IProfile {
    name: string
    age : number | string
    school : string
  }
  const profile:IProfile = {
    name: "철수",
    age:8,
    school: "다람쥐초등학교",
  }
  profile.age = "8살"

  //함수타입 : 어디서 몇번이든 호출 가능하므로, 타입추론 할 수 없음
  const add = (number1: number, number2:number, unit:string) =>{
    return number1 + number2 + unit
  }
  const result = add(1000,2000,"원")

  let qqq: any = "철수"
  qqq = 123
  qqq = true
  
  return <div></div>
}