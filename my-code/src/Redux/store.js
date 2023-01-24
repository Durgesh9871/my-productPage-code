
import {applyMiddleware, legacy_createStore , combineReducers} from "redux" 
import { LaptopReducer } from "./Laptop_reducer/reducer" 
import { WishlistReducer } from "./Wishlist_reducer/wishListReducer" 
import { CartReducer } from "./Cart_reducer/reducer"
import thunk from "redux-thunk"
 
const rootReducer = combineReducers({LaptopReducer , WishlistReducer ,CartReducer})
const store = legacy_createStore(rootReducer ,applyMiddleware(thunk))

export {store}
