import React, { Component } from 'react';
import { connect } from 'react-redux';
import InsertForm from '../components/products/InsertForm/InsertForm';
import ProductWrapper from '../components/products/ProductList'
import ListProduct from "../components/products/ProductList/ListProduct";
import * as productActions from '../store/modules/products';

export class ProductContainer extends Component {
    handleChange = ({ name, value }, isEditing) => {
        const { insertproduct } = this.props;
        insertproduct({name, value},isEditing);
    };

    addProduct = () => {
        const {addProduct} = this.props;
        addProduct();
    }

    componentDidMount(){
        this.getProduct();
    }

    getProduct = () => {
        const { getProduct } = this.props;
        getProduct();
    }


    updateProduct = () => {
        const { updateProduct } = this.props;
        updateProduct();
    }

    handleToggle = ({id, title, content, price }) => {
        const { toggleProduct } = this.props;
            toggleProduct({id,title, content, price})


    }

    handleToggleClose = ({id, title,content,price}) =>{
        const { toggleProduct, editing } = this.props;
        if (editing.id === id) {
            toggleProduct({ id: null,
                            title:"",
                            content:"",
                            price : ""});

        }
    }

    render(){
        const {title, content, price } = this.props.form;
        const { product,error, editing } = this.props;
        const {handleChange, addProduct, handleToggle, updateProduct, handleToggleClose} = this;
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
                    <ListProduct product = {product}
                                 editing = {editing}
                                 onToggle = {handleToggle}
                                 onClose = {handleToggleClose}
                                 onChange={handleChange}
                                 onUpdate={updateProduct}
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
    error : state.products.error,
    editing : state.products.editing

});

const mapDispatchToProps = dispatch => {
    return {
        insertproduct : ({name, value}, isEditing) => {
            dispatch(productActions.insertproduct({name, value}, isEditing))
        },
        addProduct : () => {
            dispatch(productActions.addProduct());
        },
        getProduct : () => {
            dispatch(productActions.getProduct());
        },
        toggleProduct: ({id, title, content, price }) => {
            dispatch(productActions.toggleProduct({ id, title,content,price }));
        },
        updateProduct : () => {
            dispatch(productActions.updateProduct());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);

// if (editing.id === id) {
//     console.log("if!")
//     toggleProduct({ id: null,
//                     title:"",
//                     content:"",
//                     price : ""});
//
// } else {
