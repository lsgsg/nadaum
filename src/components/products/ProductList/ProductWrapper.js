import React from 'react';
import styles from './ProductList.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const ProductWrapper = ({children}) => (
    <div className={cx('wrapper')}>
        {children}
    </div>
);
export default ProductWrapper;
