// defualt 가 없는 경우엔 {}  안에서 불러와얗나다.
import * as types from './ActionTypes';

// 액션생성자는 우리가 만든 액션의 이름을 캐멜캐에스로 만들어야 한다.
// 액션생성자 또한 다른곳에서 부를 수 있더록 export 해야한다.

export function increment(){ // 여기서 리턴하는 것은 r객체이다.
    return {
        type : types.INCREMENT
    };
}

export function decrement(){
    return {
        type : types.DECREMENT
    };
}

export function setColor(color) {
    return {
        type : types.SET_COLOR,
        color
    }
}

// 만약에 액션이 많아 질 경우 파일을 따로 만들어 관리하면 좋다.
// 이제 reducer부분을 알아 볼거다.
// 리듀서는 변화를 일으키는 함수이다.
// 함수는 순수해야한다.
// 비동기 작업 하면 X , 전달받은 인수 변경 X, 동일인수 = 동일결과
// 이전 상태와 액션을받아 새로운 상태를반환한다.
// 액션 : 어떤 작업을 할지 정보를 지니고 있는 객체 ..
// 그 정보에 따라 새로운 상태를 반환하낟.
// "새로운" 상태를 반환
// 기존상태를 복사하고 변화를 준 다음에 반환 ... (서류 복사하는 사무실 직원 기억! )
//
