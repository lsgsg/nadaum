import { ajax } from "rxjs/observable/dom/ajax";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { ofType } from 'redux-observable';

const INSERT_PRODUCT = "INSERT_PRODUCT"; // input에 입력된 값 state로 가져오는 거..

// product추가..
const ADD_PRODUCT = "ADD_PRODUCT";
const ADD_PRODUCT_SUCCESS = "ADD_PRODUCT_SUCCESS";
const ADD_PRODUCT_FAILURE = "ADD_PRODUCT_FAILURE";


//추가한 후 list가져오기
const GET_PRODUCT = "GET_PRODUCT";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAILURE = "GET_PRODUCT_FAILURE";

// 수정기능 만들기
const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
const UPDATE_PRODUCT_FAILURE = "UPDATE_PRODUCT_FAILURE";
const TOGGLE_PRODUCT = "TOGGLE_PRODUCT"

export const insertproduct = ({ name, value }, isEditing ) => ({
    type:INSERT_PRODUCT,
    payload : {
        name, value, isEditing
    }
}); // input에 입력된 값 가져오기..


//--------------------ADD------------------------//
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

//--------------------ADD------------------------//
//--------------------GET------------------------//

export const getProduct = () => ({
    type : GET_PRODUCT
});

export const getProductSuccess = ({product}) =>({
    type : GET_PRODUCT_SUCCESS,
    payload : {
        product
    }
})

export const getProductFailure = error => ({
    type : GET_PRODUCT_FAILURE,
    payload : {
        error
    }
});

const getProductEpic = (action$,state$) => {
    return action$.pipe(
        ofType(GET_PRODUCT),
        withLatestFrom(state$),
        mergeMap(([action, state]) => {
            return ajax
            .get(`/api/product/`)
            .pipe(
                map(response => {
                    const product = response.response; // 넘겨줄 메소드의 매개변수이름과 같아야한다....
                    console.log(product)
                    return getProductSuccess({product});
                }),
                catchError(error =>
                    of(
                        {
                            type : GET_PRODUCT_FAILURE,
                            payload : error,
                            error : true
                        })
                )
            );
        })
    );
};
//--------------------GET------------------------//
//-------------------UPDATE------------------------//
export const toggleProduct = ({id, title, content, price}) => ({
    type : TOGGLE_PRODUCT,
    payload : {
        id,
        title,
        content,
        price
    }
});

export const updateProduct = () => ({
    type : UPDATE_PRODUCT
});

export const updateProductSuccess = ({product}) => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload : {
        product
    }
});

export const updateProductFailure = error => ({
    type : UPDATE_PRODUCT_FAILURE,
    payload : {
        error
    }
});

const updateProductEpic = (action$, state$) => {
    return action$.pipe(
        ofType(UPDATE_PRODUCT),
        withLatestFrom(state$),

        mergeMap(([action, state])=>{
            return ajax
            .patch(`/api/product/$[state.products.editing.id]/`,{
                title : state.products.editing.title,
                content : state.products.editing.content,
                price : state.products.editing.price
            })
            .pipe(
                map(response => {
                    const product = response.response;
                    return updateProductSuccess({product});
                }),
                catchError(error =>
                    of({
                        type : UPDATE_PRODUCT_FAILURE,
                        payload : error,
                        error : true
                    })
                )
            )
        })
    )
}


//-------------------UPDATE------------------------//


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
    },
    editing : {
        id : null,
        title : "",
        content : "",
        price : ""
    }

}

export const products = ( state = initialState, action) => {
    switch (action.type) {
        case INSERT_PRODUCT :
            let productForm = state.form;
            productForm[action.payload.name] = action.payload.value;
            // let editForm = state.editing;
            // editForm[action.payload.name] =
            //     action.payload.value;
            if (action.payload.isEditing){
                return {
                    ...state,
                    editing : productForm
                };
            }
            return {
                ...state,
                form : productForm
            }
        case ADD_PRODUCT_SUCCESS :
            const {product} = action.payload;
            return {
                ...state,
                form : {
                    title : "",
                    content : "",
                    price : ""
                },
                product :[product].concat(state.product),
                error : {
                    triggered : false,
                    message : ""
                }
            }; //concat은 배열의 추가
        case ADD_PRODUCT_FAILURE:
            return {
              ...state,
              error: {
                triggered: true,
                message: "에러에러! insert 할수갸 없어요유"
              }
            };
        case GET_PRODUCT_SUCCESS :
            return {
                ...state,
                product : action.payload.product
            };
        case GET_PRODUCT_FAILURE :
            return {
                ...state,
                error : {
                    triggered : true,
                    message : "리스트 작성 오류"
                }
            };
        case UPDATE_PRODUCT_SUCCESS :
            const { id, title, content, price } = action.payload.product;

            let products = state.products;
            let index = products.findeIndex((prod, i) => {
                return prod.id === id;
            });
            products[parseInt(index, 10)] = {
                id,
                title,
                content,
                price
            };
            return {
                ...state,
                editing : {
                    id : null,
                    title : "",
                    content : "",
                    price : ""
                },
                product
            }
        case TOGGLE_PRODUCT :
            return {
                ...state,
                editing : {
                    id : parseInt(action.payload.id, 10),
                    title : action.payload.title,
                    content : action.payload.content,
                    price : action.payload.price
                }
            }
        default :
            return state;
    }
}

export const productEpics = {
    addProductEpic,
    getProductEpic,
    updateProductEpic
}
