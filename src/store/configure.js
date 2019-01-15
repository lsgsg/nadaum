import { createStore, applyMiddleware, compose } from "redux"
import { createEpicMiddleware } from "redux-observable";

import { rootReducers, rootEpics } from "./modules";

// 크롬 데브 툴스 설정
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

// reducer들을 모두 모아서 하나의 리덕스 스토어를 만들어준다.
// redux-observable을 사용하기 때문에, epicMiddleware를 적용할거다.

export default createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpics);
