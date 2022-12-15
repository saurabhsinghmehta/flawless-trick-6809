import * as types from "./action"

const initialState={
    data:[],
    isLoading:false,
    isError:false
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action;
    switch(type){
        case types.GET_ERROR:
            return {
                ...oldstate,isError:true,isLoading:false
            }
        case types.GET_REQUEST:
            return {
                ...oldstate,isLoading:false
            }
        case types.GET_SUCCESS:
            return {
                ...oldstate,data:payload
            }
        default:
            return oldstate
    }
}
export default reducer;