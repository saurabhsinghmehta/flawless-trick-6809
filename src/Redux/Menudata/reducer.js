import * as types from "./actiontype"

const initialState={ menudata:[], isLoading:false, isError:false } 

const reducer=(oldstate=initialState,action)=>{ 
    const {type,payload}=action; 
    
    switch(type){ 

        case types.GET_MENU_ERROR: 
        return { ...oldstate,isError:true,isLoading:false } 
        
        case types.GET_MENU_REQUEST: 
        return { ...oldstate,isLoading:false,isError:false } 
        
        case types.GET_MENU_SUCCESS: 
        return { ...oldstate,isLoading:false,menudata:payload,isError:false } 
        
        default: 
        return oldstate
      }
     } 
    
     export default reducer;