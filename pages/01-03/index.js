import React from 'react'

export default function index() {
  return (
    <Wrapper>
      <Wrapper_header>
        사진 등록
      </Wrapper_header>
      <Wrapper_body>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer type="text" placeholder="이름을 적어주세요"/>
        </InputWrapper>
      </Wrapper_body>
      <Wrapper_footer>

      </Wrapper_footer>
    </Wrapper>
  )
}
