import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions';

const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Value number={this.props.number}/>
                <Control/>
            </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        number : state.Counter.number,
        color : state.Ui.color
    };
}
// 이 함수는 statef라는 이름으로 를 파라미터로 받는다.
// 여기서 사용되는 state는 파라미터 이름이 state이다.
//  이 state는 리덕스의 state를 칭한다.
// 리덕스 state안에 있는 걸, 이 컴포넌의 props로 매핑해 주는 것이다.
// 객체를 리턴한다.
//  어떠한 props가 state의 어떠한 값으로 연결될지를 이곳에서 정하는 것이다.
//  이렇게 리턴을 하면 state안에 있던 값들이  이 컴포넌트의 number props 와 color porps로 연결이 되는 것이다.

const mapDispatchToProps = (dispatch) => {
    return {
        handleIncrement : () => { dispatch(actions.increment())},
        handleDecrement : () => { dispatch(actions.decrement())},
        handleSetColor : (color) => {dispatch(actions.setColor(color))}
    }
}
// 액션을 dispatch하는 함수를 props로 연결해주면된다.
// 우리에게 필요한것은 값을 올리는 increment
// 값을 내리는 decrement,
// 색상을 지정해주는 set_color가 있다.
// - > ActionTypes
// 그럼 여기서도 각 3가지 액션을 담당할 함수를 연결해야한다.
// 그러려면 우선 actioncreator 를 불러와야한다.
// import * as actions from '../actions';
// 먼저 increment를 담당할 handleIncrement라는 props를 만든다
// 이 prop의  내용 은 함수인데
// 이 함수 안에서는 dispatch한다. 무엇을? actions.increment()를.
//  액션 increment 액션생성자에서 만든 액션을 dispatch ㅎㄴ다.
// 만약에 이 props를 실행하면 저 내용이 실행되는거다.
//  자 이제 이 카운터를 방금만든 mapStateToProps와 mapDispatchToProps 를 사용하여
// 리덕스에 연결해보자
//







export default connect( mapStateToProps, mapDispatchToProps )(Counter);
// 똑똑한 컴포넌트이다.
// 그러니깐. 아까전에 설명했듯이 이 커넥트가 반환하는 것은 컴포넌트를 리덕스에 연결하는 또다른 함수를 반환한다고 했다.
// connect()가 한함수를 반환하고,  그 반환된 함수에 파라미터로 Counter Class를 넣어 주는 것이다.
// 이렇게 하면 리덕스에 연결할 수 있다.
// 연결을 했으면
