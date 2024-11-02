import {configureStore} from "@reduxjs/toolkit";
import todoReducer from "../state/todo/todoSlice.js";

export default configureStore({

    reducer:{
        todo:todoReducer,
    }

})