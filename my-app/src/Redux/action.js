
import {GETPRODUCTLAPTOPDATA_REQUEST ,GETPRODUCTLAPTOPDATA_SUCCESS,GETPRODUCTLAPTOPDATA_FAILURE} from "./actionType"  ; 
import axios from "axios"


const getDataProduct =()=> (dispatch)=>{
        dispatch(GETPRODUCTLAPTOPDATA_REQUEST()) 
        return axios.get(` http://localhost:8080/Laptop`)
        .then((res)=> dispatch(GETPRODUCTLAPTOPDATA_SUCCESS(res.data))) 
        .catch(()=> GETPRODUCTLAPTOPDATA_FAILURE())
}

export {getDataProduct}