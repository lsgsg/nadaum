import React from 'react';
import styles from './InsertForm.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
const InsertForm = ({title, content, price , onChangeInput, onAdd, error }) => {
    const handleChange = e => {
        const { name,value } = e.target;
        // python 처럼 e.target에서 리턴되는 2가지의 값이 name,value에 차례대로 매핑됨... es6문법 특징... ?인가
        onChangeInput({name,value})
    }

    const handleClick = e => {
        // 페이지 리로딩 방지
        e.preventDefault();
        onAdd();
    }
    return (
        <div className={cx("form")}>
            <div className={cx('title')}>
                상품등록을 해주세요
            </div>
            <div className={cx("error")}>
                {error.triggered && (
                  <div className={cx("message")}>{error.message}</div>
                )}
            </div>
            <form onSubmit = {handleClick} >
                <input
                    type="text"
                    name="title"
                    value={title}
                    placeholder="제품명"
                    onChange={handleChange} />
                <textarea
                    name="content"
                    value={content}
                    placeholder="상품상세"
                    onChange={handleChange}>
                </textarea>

                <input
                    type="number"
                    name="price"
                    value={price}
                    placeholder="상품가격"
                    onChange={handleChange}/>
                
                <button type="submit">상품등록</button>
            </form>
        </div>
    );
};
export default InsertForm;
//                <input type="text" name="content" value={content} placeholder="상품상세" onChange={handleChange}/>
