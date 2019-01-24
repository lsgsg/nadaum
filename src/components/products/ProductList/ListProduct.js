import React from "react";
import styles from "./ProductList.scss";
import classNames from "classnames/bind";
import ProductItem from "./ProductItem";

const cx = classNames.bind(styles);
const ListProduct = ({ product, editing, onToggle, onChange }) => {
    const listproduct = product.map((p, i) => {
        return <ProductItem p={p}
                            key={p.id}
                            editing = {editing}
                            onToggle={onToggle}
                            onChange={onChange}
                            />;
    });

    return (
            <div className={cx("product-list")}>
                <div className={cx("title")}>
                    당신이 등록한 제품은?
                </div>
                {listproduct}
            </div>
    );
}
export default ListProduct;
