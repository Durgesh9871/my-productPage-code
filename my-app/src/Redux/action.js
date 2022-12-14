
import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ; 
import axios from "axios"


const getDataProduct =()=> (dispatch)=>{
        dispatch({type:GETPRODUCTLAPTOPDATA_REQUEST}) 
        return axios.get(` http://localhost:8080/Laptop`)
        .then((res)=> dispatch({type:GETPRODUCTLAPTOPDATA_SUCCESS , payload:res.data})) 
        .catch(()=> dispatch({type:GETPRODUCTLAPTOPDATA_FAILURE}))
}

export {getDataProduct}

