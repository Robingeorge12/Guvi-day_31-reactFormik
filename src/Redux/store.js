import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./book";
import authorReducer from "./author";

export const store = configureStore({
  
    reducer:{
       
        book:bookReducer,
        author:authorReducer,
    }
    
}) 