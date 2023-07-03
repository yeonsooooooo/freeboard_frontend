const REST_API_KEY = "3f69a099ce25226ee6e8916fc2e712ae"
const REDIRECT_URI = "http://localhost:3000/26-10-kakao-login/callback"

export const KAKAO_AUTH_URL=`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;