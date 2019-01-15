import React from 'react'; // 리액트 불러오고
import ReactDOM from 'react-dom'; // 리액트돔도 불러오고
import Root from "./Root"
import "./styles/index.scss";
import * as serviceWorker from './serviceWorker';
//import * as actions from './actions';

//import { createStore } from 'redux'; // v
//import reducers from './reducer/index.js'; //v

//const store = createStore(reducers);//v
// 이렇게 하면 스토어가 만들어 져ㅣㄴ거ㅏㄷ.
//  그렇다면 store의 역할을 무엇일가/

// 1. dispatch(action)
// 뜻은 보낸다는 의미를 가지고 있다.
// 액션을 reducer로 보낸다는 것이다. 여기서 reducer는 숫자를 증가, 감소 시키는 counter리듀서, 색을 바꾸는 ui 리듀서가 있따. reducer 폴더에 있다.

// dispatch가 실행되면 store는 리듀서에 현재 자신상태와 방금 전달받은 액션을 들고 전달해준다.
// 그러면 리듀서가 어떠한 변화가 필요한지 알아낸 다음 변화를 주고, 새 상태를 주면 현상태에 갈아끼우는 것이다.

// 2. getState();
// 현재 상태를 반환하는 함수이다.
// 3. subscribe(listener) : 상태가 바뀔 때마다 실행할 함수를 등록하는 것이다.
// 여기서 이 listener가 상태가 바뀔때마다 실행 될 콜백함수이다.

// 4. replaceReducer(nextReducer) : 이것은 hot리로딩과 코드분할을 구현할때 사용, 보통 사용될일 없다.



// 그렇다면 여기 이 store를 컴포넌트에 연결하기 전 리덕스에 대한 이해를 위하여 먼저 사용을 해보겠다. 이파일에서 현재 상태를 기록하게 봐라...

//console.log(store.getState());// 현상태가 기록됨..
//store.subscribe(()=> console.log(store.getState()))// 스토어에 변화가 있을 때마다 console.log가 실행됨..

// 그럼 action을 불러보자.
// 액션을 보내려면 dispatch 함수를 쓴다고 이야기 했었다.
//store.dispatch(actions.increment());
// 이 액션생성자 함수가 실행되면 하나의 액션을 만들어 바환해 줄거다.
// 그럼 그 액션 객체를 dispatch 함수를 통해서 전달을 하는 것이다.
// 액션이 실행되어 console 로 출력되는 상태의 값이 바뀌는 것을 볼 수 있다.
// 현재상태를 계속 구독하는 것이 subscribe다 하지만 더이상의 구독이 필요업다면
// const unsubscribe 함수에 subscribe를담고
// unsubscribe(); 하면된다.
// unsubscribe() 뒤의 dispatch는 실행되지 않는다.

// 앞으로 컴포넌트에서 리덕스 스토어안에 있는 데이터를 사용하고 또 필요하면 변화를 주도록 할 것이다. 그렇게 하려면, 이 앱컴포넌트에  스토어를 porps 로 전달해서 하위 컴포넌트 안에서 getState()[현재상태를 불러오기] 한다던지, dispatch(액션을 전달)한다던 해서 데이터를 읽어오거나 변화를 주면 되는데 그렇게 하면 할 수는 있다만,,,
// 상당히 구조가 복잡해진다.
// 리액트에서 리덕스를 더 편하게 쓰는 방법이 있다.

//바로 react redux 라는 뷰 레이어 바인 도구를 사용하는 것이다.
//


ReactDOM.render(<Root/>, document.getElementById('root'));
//리액트 돔을 이용하여 렌더링

serviceWorker.unregister();



// 리액트-리덕스
// react redux 라는 뷰 레이어 바인 도구
// 리액트 컴포넌트에서 react를 사용할 때, 복잡한 작업을 쟤가 다 해준다.
// 저번에 카툰안내서에서 봤을때, 뷰 레이어 바인딩은 : it 부서와 같다고 했다.
// 그럼 이걸 어떻게 사용하나?
// 리액트 리덕스의 핵심은 2가지다.
// 1. provider : 제공하다. 컴포넌트에서 리덕스를 사용하도록 서비스를 제공해주는 것인데 provider는 하나의 컴포넌트 이다.

// <Provider store = {store}>
//    <App/>
// </Provider>
// 우리 프로젝트에서 사용하는 컴포넌트를 리액트돔으로 페이지에 렌더링하게 될때,
// 해당 컴포넌트를 이  프로바이더 컴포넌트 안에 감싸주면 provider가 복잡한 작업들을
// 알아서 해준다.
