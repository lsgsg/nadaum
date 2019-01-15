import React, { Component } from 'react';
import { connect } from 'react-redux';
import InsertForm from '../components/products/InsertForm/InsertForm';
import ProductWrapper from '../components/products/ProductList'

import * as productActions from '../store/modules/products';

export class ProductContainer extends Component {
    handleChange = ({ name, value }) => {
        const { insertproduct } = this.props;
        insertproduct({name, value})
    };

    addProduct = () => {
        const {addProduct} = this.props;
        addProduct();
    }

    render(){
        const {title, content, price } = this.props.form;
        const { error } = this.props;
        const {handleChange, addProduct} = this;
        return (
            <div>
                <ProductWrapper>
                    <InsertForm title={title}
                                content={content}
                                price={price}
                                onChangeInput={handleChange}
                                onAdd={addProduct}
                                error = {error}
                                />
                </ProductWrapper>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    form : {
        title: state.products.form.title,
        content : state.products.form.content,
        price : state.products.form.price
    },
    product : state.products.product,
    error : state.products.error

});

const mapDispatchToProps = dispatch => {
    return {
        insertproduct : ({name, value}) => {
            dispatch(productActions.insertproduct({name, value}))
        },
        addProduct : () => {
            dispatch(productActions.addProduct());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
