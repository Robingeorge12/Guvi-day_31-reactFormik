import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: "1",
      title: "RobinHood",
      date: "2024-01-12",
      author: "David",
      ISBN: "03",
    },
    {
      id: "2",
      title: "The Secret",
      date: "2024-03-22",
      author: "Gelnn",
      ISBN: "493",
    },
    {
      id: "3",
      title: "The Blind",
      date: "2023-04-10",
      author: "Helen",
      ISBN: "105",
    },
  ],
  isLoading: false,
  isError: false,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getAllBooks: (state, action) => {},
    addNewBooks: (state, action) => {
      // console.log(action)
      state.books.push(action.payload);
      //   console.log(x)
      state.isLoading = false;
      state.isError = false;
    },
    editEachBook: (state, action) => {
      console.log(action);

      let update = state.books.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, ...action.payload };
        }
        return el;
      });
 
      state.books = update;
    },
    deleteEachBook: (state, action) => {
        console.log(action.payload);
      let removed = state.books.filter((el,i) => {
        // return el.id !== action.payload
        if(el.id === action.payload){
           state.books.splice(i,1)
        }
  
      });

    //   state.books = removed
    },
  },
});

export const { getAllBooks, addNewBooks, editEachBook, deleteEachBook } =
  bookSlice.actions;
export default bookSlice.reducer;
