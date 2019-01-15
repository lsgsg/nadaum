import React, { Component, PropTypes } from 'react';
const propTypes = {
    onPlus : PropTypes.func,
    onSubtract : PropTypes.func,
    onRandomizeColor : PropTypes.func
};
// 기본값으로 함수를 받은 것을정의 했다.

// const defaultProps = {
//     onPlus: () => console.warn('on Plus 는 정의되지 않았습니다.')
// };

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')
};
// 그리고 기본값은 해당함수가 설정되지 않았다는 에러를 띄울 것이다.
// 에로우 함수를 활용해서 만들것이다.
// 근데 나머지도 비슷한 내용을 가지고 있잖아..
// 그럼 경고를 만드는 또다른 함수를 ㅁ만들자.

function createWarning(funcName){
    //파리미터로 함수의 이름을받았다.
    return () => console.warn(funcName + '은(는) 정의되지 않았습니다.');
}

class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <div>
            <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onSubtract}>-</button>
            <button onClick={this.props.onRandomizeColor}>랜덤색상</button>
        </div>
        );
    }
}
// 버튼들이 클릭되면 실행될 함수들을 props로 받아올거다.
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
