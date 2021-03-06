import React from "react";
import styles from "./ProductList.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ProductItem = ({p, editing, onToggle, onChange,onClose,onUpdate}) => {
    const handleToggle = () => {
            onToggle(
                {id: p.id,
                 title : p.title,
                 content : p.content,
                 price : p.price }
             )
    };

    //change함수 추가 및 input 태그 value값과 onChange 추가.
    const handleChange = e => {
        const {name, value } = e.target;
        onChange({name,value}, true);
    }
    const handleClick = e => {
        // 페이지 리로딩 방지
        e.preventDefault();
        onUpdate();
        onClose(
            {id: p.id,
             title : p.title,
             content : p.content,
             price : p.price }
         )
    }
    return (
        <div className={cx("product-item",
             editing.id === p.id && "editing")}

        >
        {editing.id === p.id ? (
            <form onSubmit = {handleClick} >
                <input type="text"
                       name="title"
                       autoFocus
                       value={editing.title}
                       onChange={handleChange}/>

                <textarea type="text"
                          name="content"
                          value={editing.content}
                          onChange={handleChange}>
                </textarea>

                <input type="number"
                       name="price"
                       value={editing.price}
                       onChange={handleChange}/>

                <button type="submit">수정</button>

            </form>

        ) : (
            <div className={cx("product")}>
                <div className={cx("product-tag1","product-tag")}>
                    {p.title}
                </div>
                <div className={cx("product-tag2","product-tag")}>
                    {p.content}
                </div>
                <div className={cx("product-tag3","product-tag")}>
                    {p.price} 원
                </div>
            </div>
        )}
            <div className={cx("updatee")} onClick={handleToggle}>●</div>
            <div className={cx("delete")}> &times; </div>

        </div>
    )
}
export default ProductItem;
