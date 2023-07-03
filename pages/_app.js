import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'


//http:localhost:3000/__ 이렇게 실행을 시키면 실제로 react 동작원리는 _app.js를 실행시킨다.
//여기서 Compㅐnent 부분에 다른 페이지들의 컴포넌트 값들이 불러와진다.이렇게 실행 !!
//그 페이지가 보이는게 아니라, 그 페이지 코드가 _app.js에 합쳐져서 보이는 것 !
function MyApp({Component, pageProps}){
  
  const client = new ApolloClient({
    uri : "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })
  
  //Component를 부모 태그로 감싸주면, 자식 컴포넌트 전체에 client값을 전달해 줄 수 있게 된다.
  //따라서 페이지 컴포넌트 전체에서 graphql api를 호출할 수 있게 된다.
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps}/>
    </ApolloProvider>
  )
}

export default MyApp