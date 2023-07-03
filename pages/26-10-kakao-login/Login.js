import React from "react";
import { KAKAO_AUTH_URL } from "./OAuth";

export default function Kakaologin() {
  return (
    <>
      <a href={KAKAO_AUTH_URL}>카카오로 로그인하기</a>
    </>
  );
}
