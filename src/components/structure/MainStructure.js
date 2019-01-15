import React from 'react';
import styles from './MainStructure.scss';
import classNames from 'classnames/bind';
import Header from './Header';
const cx = classNames.bind(styles);
const MainStructure = ({children})=>(
    <div>
        <Header />
        <main> {children} </main>
    </div>
);
export default MainStructure;
// header 를 매 페이지에서 import 하는 것은 비효율적이다.
// main페이지의 그릇이 달라지는 구조로 만들어 보았다.
