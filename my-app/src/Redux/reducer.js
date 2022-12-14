import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ;  


const initialState = {
    isLaptopLoading: false ,
    productArrayLaptop :[] ,
    isLaptopError: false ,
}


const LaptopReducer = (oldState=initialState, action)=>{
   switch(action.type){
    case GETPRODUCTLAPTOPDATA_REQUEST:
        return{...oldState ,isLaptopLoading:true }
    case GETPRODUCTLAPTOPDATA_SUCCESS:
        return{...oldState , productArrayLaptop:action.payload , isLaptopError:false} 
    case GETPRODUCTLAPTOPDATA_FAILURE:
        return{...oldState , isLaptopError:true , isLaptopLoading:false }  
       default:
        return oldState ; 
   }

}

export {LaptopReducer}