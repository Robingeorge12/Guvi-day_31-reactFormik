import { createSlice } from "@reduxjs/toolkit";

const init = {
    authors : [
        {id:"1",name: "Freddy", DOB: "2024-01-12", Biography: "One of the leading writer now a days" },
        {id:"2",name: 'Dani', DOB: '2024-01-18', Biography: 'His writings are most popular'},
        {id:"3",name: "Freddy", DOB: "2024-01-12", Biography: "One of the leading writer now a days" },
    ],
    isLoading : false,
    isError : false
} 

export const authorSlice = createSlice({
    name:"author",
    initialState : init,
    reducers:{
        getAllAuthors:(state,action)=>{
            state.authors = action.payload
        },
        addNewAuthor:(state,action)=>{
            
            state.authors.push(action.payload)
            state.isLoading = false;
            state.isError = false

        },
        editEachAuthor:(state,action)=>{
            
            let update = state.authors.map((el) => {
                if (el.id === action.payload.id) {
                  return { ...el, ...action.payload };
                }
                return el;
              });
         
              state.authors = update;


        },
        deleteEachAuthor:(state,action)=>{
            console.log(action.payload);
      let removed = state.authors.filter((el,i) => {
        // return el.id !== action.payload
        if(el.id === action.payload){
           state.authors.splice(i,1)
        }
  
      });

    //   state.authors = removed

        }
    }
})

export const {getAllAuthors,addNewAuthor,editEachAuthor,deleteEachAuthor} = authorSlice.actions
export default authorSlice.reducer