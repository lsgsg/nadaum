import * as types from '../actions/ActionTypes';
// 리듀서의 초기상태를 정해라..
// 리듀서의 함수가 파라미터로 이전상태와 액션을 전달 받을 거다.
// 근데 이전상태가 지금 정의 되어 있지 ㅏㄶ다.
// 초기상태를 여기서 정할거다. 상수로 말이다.

const initialState = {
    number : 0,
    dummy : 'dumbdumb',
    dumbObject : {
        d:0,
        u:1,
        m:2,
        b:3
    }
};
// 기본 인수
// 배경색갈은 따로 만들거다.
// 따로 만드는 이유/
// 여려 리듀서를 관리하는 것을 배워보자.
// 민약 object안의 u의 값만 바꾸고 싶다면?

export default function Counter(state = initialState, action) {
    // 여기서 받은 액션은 나중에 index.js에서 만든 액션생성자 함수를 사용하게 될때 이를 통해서 만든 액션들이다. dispatch를 통해 Counter로 넘어옴..
    //타입에 따라서 이곳에서 어떤 일을 할지 정한다.
    // Counter리듀서에서 정하는 함수는 increment와 decrement다.

    switch(action.type){ // action.type에 따라서 어떠한 작업을 하는 것이다.
        case types.INCREMENT : // 일단... 기존값에 있는 nuber를 불러와서 + 1 해주면 된다. 기존 state를 바꾸는 것이 아닌 새로운 개체를 만든 것이다.
        // 객체안에 값이 하나가 있을때엔 이렇게 하나를 덮어쓰기 하면 되지만
        // 만약에 값이 2개 이상이라고 했을땐 하나만 덮어쓰기 하는 경우
        // 기존 state에 설정된 2개의 값은 없어지고 1개만 남게됨..
        // 이 문제를 해결하기 위해서 spread?? 방식을 사용할것
            return {
                ...state,
                number : state.number + 1,
                dumbobject : {
                    ...state.dumbObject,
                    u : 0
                }
            };
        // 이러면 기존에 있던 state 값이 이 자리에 다 복사가 된다.
        // 이렇게 하면 기존의 값 + 덮어씌우기...
        // 그럼 dummy도 살아남..
        // 예를 들어 민약 object안의 u의 값만 바꾸고 싶다면?
        case types.DECREMENT :
            return {
                ...state,
                number:state.number - 1
            };
        default :
            return state; // 기존상태를 그대로 전달..

    }
}

// 이전상태값인 state,
// actionsdmfqkedmsek.
// state는 맨처음에 undefined 이다.
// if(typeof state === 'undefined') {
//     return initialState;
// }
 // undefined 가 아니면 state를 반환한다.
 //state = initialState state가 undefined라면 initialState를 사용해라...




 //만약 SET_COLOR액션을 전달받았다면 기존상태가 그대로 반환될거다.
 // 그럼 변화가 없을 테니깐 다른 리듀서에서 이 액션을 처리 할수 있는지 없는지 알아 본다.
 // 그럼 다른 리듀서를 만들어보자
