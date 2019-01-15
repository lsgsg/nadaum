import React from 'react';
import styles from './header.scss';
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { MdLock } from "react-icons/md";

const cx = classNames.bind(styles);

const Header = ({onLogout}) => (
    <div className={cx("header")}>
        <Link to={"/"} className={cx("logo")}>
            상 품 등 록
        </Link>
        <div className={cx("logout")}>
            <MdLock onClick={onLogout}/>
        </div>
    </div>
);

export default Header;
