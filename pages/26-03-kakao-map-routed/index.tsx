import Head from 'next/head'
import {useEffect} from 'react'
import Script from 'next/script'

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage(){
  useEffect(()=> {
    const script = document.createElement("script"); //변수에 저장해서 조작하기 위해
    
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=00665e56ea9ac145f964f0db506f8ca3"
    document.head.appendChild(script);

    //스크립트가 모두 다 로드가 되면, 그때 밑에 실행시켜줘.
    script.onload = () =>{
      window.kakao.maps.load(function(){
        const container = document.getElementById('map');  // 지도를 담을 영역의 DOM 레퍼런스
        const options = { // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(
            33.450701,
            126.570667), // 지도의 중심좌표.
          level: 3 // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    });
  };
}, []);
    
  
  return (
    <>
      {/* <Head>
        <Script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=	00665e56ea9ac145f964f0db506f8ca3"></Script>
         이렇게 다운로드 받아오면 window 안에 kakao 가 들어가게 된다. 근데 window는 kakao가 있다는 것을 모른다. 
         이 부분을 return에다가 작성해도 실행되지 않는 이유 !!!!!

         SSR 방식을 사용하면 한번에 불러오는데, 페이지 이동하는 시간이 이 페이지에서 카카오서버의 지도정보를 받아오는 것보다 너무 짧다. 따라서 오류남.
        그래서 해결 방법은, 위의 주석 코드 부분을 따로 조정함
        
      
      </Head> */}
      
      <div id="map" style={{width:500,height:400}}></div>
    </>
  );
}
