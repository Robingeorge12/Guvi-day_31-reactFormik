import React, { useCallback, useEffect } from "react";
import "./BookFormik.css";
import { useFormik } from "formik";
import book, {
  getAllBooks,
  addNewBooks,
  editEachBook,
  deleteEachBook,
} from "./../../Redux/book";
import { useDispatch, useSelector } from "react-redux";
function BookFormik() {
  const dispatch = useDispatch();
  const { books,isLoading, isError } = useSelector((state) => state.book);
 


  // title: "Robin",
  // date: "2024-01-12",
  // author: "Gr",
  // ISBN: Number(123),

  // title: "",
  // date: "",
  // author: "",
  // ISBN: Number(null),
  console.log(books);
  const bookFormik = useFormik({
    initialValues: {
      title: "",
      date: "",
      author: "",
      ISBN: Number(null),
      id:Date.now()
    },
    onSubmit: async (values) => {
      // values.preventDefault()
      // console.log(values);
     await dispatch(addNewBooks(values));

    },
    validate: () => {},
  });




  return (
    <div className="container d-flex flex-column mt-4 align-items-center justify-content-center bkform-container">
      <div>
        <h3>Book Form</h3>
      </div>

      <form
        className="d-flex flex-column text-start bkForm"
        onSubmit={bookFormik.handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label bkName">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={bookFormik.values.title}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={bookFormik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputtext" className="form-label bkName">
            Author
          </label>
          <input
            name="author"
            value={bookFormik.values.author}
            type="text"
            className="form-control"
            id="exampleInputtext"
            onChange={bookFormik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDOB" className="form-label bkName">
            Publication Date
          </label>
          <input
            type="date"
            min="1900-01-01"
            max="2024-03-01"
            placeholder="dd-mm-yyyy"
            name="date"
            value={bookFormik.values.date}
            className="form-control"
            id="exampleInputDOB1"
            aria-describedby="emailHelp"
            onChange={bookFormik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputtext" className="form-label bkName">
            ISBN
          </label>
          <input
            name="ISBN"
            value={bookFormik.values.ISBN}
            maxLength={10}
            type="nuber"
            className="form-control"
            id="exampleInputtext"
            onChange={bookFormik.handleChange}
          />
        </div>

        <div id="emailHelp" className="form-text">
          We'll never share your details with anyone else.
        </div>

        <button type="submit" className="btn btn-primary bkBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookFormik;
