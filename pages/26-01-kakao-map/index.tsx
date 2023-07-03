import Head from 'next/head'
import {useEffect} from 'react'
import Script from 'next/script'

declare const window: typeof globalThis & {
  kakao: any;
}

export default function KakaoMapPage(){
  useEffect(()=> {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=00665e56ea9ac145f964f0db506f8ca3"
    document.head.appendChild(script);

    script.onload = () =>{
      window.kakao.maps.load(function(){
        const container = document.getElementById('map');  // 지도를 담을 영역의 DOM 레퍼런스
        const options = { // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3 // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    });
  };
}, []);
    
  
  return (
    <>
      <Head>
        <Script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=	00665e56ea9ac145f964f0db506f8ca3"></Script>
        {/* 이렇게 다운로드 받아오면 window 안에 kakao 가 들어가게 된다. 근데 window는 kakao가 있다는 것을 모른다. */}
      </Head>
      <div id="map" style={{width:500,height:400}}></div>
    </>
  );
}
