import * as types from "./actiontype"

const initialState={
    cart:[],
    isLoading:false,
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_CART_ERROR:
            return {
                ...oldstate,isError:true,isLoading:false
            }
        case types.GET_CART_REQUEST:
            return {
                ...oldstate,isLoading:false
            }
        case types.GET_CART_SUCCESS:
            return {
                ...oldstate,cart:payload
            }
        default:
            return oldstate
    }
}
export default reducer;