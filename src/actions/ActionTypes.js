export const INCREMENT = "INCREMENT"; // 상수를 만들어 동일한 이름을 내보낸다.
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";

// 액션은 하나의 객체이다.
// 액션 객체가 필수로 가져야 하는것은 type이다.
// 이 액션이 어떤 종류인지 알 수 있다.
// increment와 decrement는 액션에 따로 정보가 필요없다. 이 타입 말고는 추가적인 정보가 없다.
// SET_COLOR는 다르다. 어떤 컬러를 적용하는지를 알려줘야 한다. rgb배열을 넣어줄거다.
// 필요한 값을 더 추가할때엔 필드를 추가하면된다.
// 그런데 이객체를 그때그때 만들기는 귀찮다.
// 그래서 있는 것이 액션 생성자다.
// actions/index.js 에 만들거다.
// ㅁㅊ샤ㅐㅜ 디렉토리만 불려왔을때 편하라고 index.js 를 썼다.
