import { combineReducers } from 'redux';
import Counter from './Counter';
import Ui from './Ui'


const reducers = combineReducers ({
    Counter, Ui
})

export default reducers;

// store는 어플리케이션의 현재 상태를 지니고 있음...
// 스토어를 만들러 리덕스에서 createStore를 불러온 다음에
// reducer를 인수로 전달하여 해당함수를 수행하면된다.
