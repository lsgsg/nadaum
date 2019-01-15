import React, { Component, PropTypes } from 'react';

const propTypes = {
    number: -1
};

const defaultProps = {
    number: -1
};

class Value extends Component {

    render() {
        return(
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
// 이 프롭스에서는 number라는 프롭스를 렌더링 할거다.
// 기본갑이 -1이라는 것은 부모에게서 값을 제대로 가지고 오지 못했다는 것
// 넘버라는 프ㅗㅂ스로 받고 그 프롭스의 타입은 넘버이다.


// es6 의 template literner ~
// 기본에 "rgb"+"("+1,2,3,+ ")"
//""background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
