import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from 'redux-observable';

const INSERT_PRODUCT = "INSERT_PRODUCT"; // input에 입력된 값 state로 가져오는 거..
const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";



export const insertproduct = ({ name, value }) => ({
    type:INSERT_PRODUCT,
    payload : {
        name, value
    }
}); // input에 입력된 값 가져오기..

export const addProduct = () => ({
    type : ADD_PRODUCT
}); //ofType으로 걸러질것..

export const addProductSuccess = product => ({
    type : ADD_PRODUCT_SUCCESS,
    payload : {
        product
    }
}); // product insert 한 뒤 list로 가녀오는 것

export const addProductFailure = error => ({
    type : ADD_PRODUCT_FAILURE,
    payload : {
        error
    }
}); // 상품 insert했는데 실패했을 때,

const addProductEpic = (action$, state$ ) => {
    return action$.pipe(
        ofType(ADD_PRODUCT),
        withLatestFrom(state$),
        mergeMap(
            ([action,state]) => {
                return ajax.post(`/api/product/`,{
                    title : state.products.form.title,
                    content : state.products.form.content,
                    price : state.products.form.price
                }).pipe(
                    map(response => {
                        const product = response.response;
                        return addProductSuccess(product);
                    }),
                    catchError(
                        error => of(
                            {
                                type : ADD_PRODUCT_FAILURE,
                                payload : error,
                                error: true
                            }
                        )
                    )
                )
            }
        )
    )
}


const initialState = {
    form : {
        title : "",
        content : "",
        price : ""
    },
    product : [],
    error : {
        triggered : false,
        message : ""
    }

}

export const products = ( state = initialState, action) => {
    switch (action.type) {
        case INSERT_PRODUCT :
            let productForm = state.form;
            productForm[action.payload.name] = action.payload.value;
            return {
                ...state,
                form :productForm

            };
        case ADD_PRODUCT_SUCCESS :
            const {product} = action.payload;
            return {
                form : [product].concat(state.form),
                product : "",
                error : {
                    triggered : false,
                    message : ""
                }
            };
        case ADD_PRODUCT_FAILURE:
            return {
              ...state,
              error: {
                triggered: true,
                message: "에러에러! insert 할수갸 없어요유"
              }
            };
        default :
            return state;
    }
}

export const productEpics = {
    addProductEpic
}
