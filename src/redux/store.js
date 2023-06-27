import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './reducer/add'

export default configureStore
({
    reducer:{
        cart:cartReducer
    }
})