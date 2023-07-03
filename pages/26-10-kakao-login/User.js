// Redux/Modules/User.js

// Action Types
const KAKAO_LOGIN = 'user/KAKAO_LOGIN';

// Action Creators
export const kakaoLogin = (code) => {
  return {
    type: KAKAO_LOGIN,
    payload: code,
  };
};

// Reducer
const initialState = {
  // Initial state properties
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case KAKAO_LOGIN:
      // Handle the action and update the state accordingly
      return state;

    // Other cases

    default:
      return state;
  }
}
