import React from "react";
import "./AuthorFormik.css";
import { useFormik, form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {getAllAuthors,addNewAuthor,editEachAuthor,deleteEachAuthor} from "./../../Redux/author";

function AuthorFormik() {


  const dispatch = useDispatch();
  const {authors, isLoading, isError} = useSelector((state)=>state.author)
console.log(authors)

  const formik = useFormik({
    initialValues: { name: "", DOB: "", Biography: "",id:Date.now() },
    onSubmit: async(values) => {
      console.log(values);
        await dispatch(addNewAuthor(values));
    },
    validate: () => {},
  });

  return (
    <div className="container d-flex flex-column mt-4 align-items-center justify-content-center auform-container">
      <div>
        <h3>Author Form</h3>
      </div>
 
      <form
        className="d-flex flex-column text-start auForm"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label auName">
            Author Name
          </label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputDOB" className="form-label auName">
            DOB
          </label>
          <input
            type="date"
            min="1900-01-01"
            max="2024-03-01"
            placeholder="dd-mm-yyyy"
            name="DOB"
            value={formik.values.DOB}
            className="form-control"
            id="exampleInputDOB1"
            aria-describedby="emailHelp"
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputtext" className="form-label auName">
            Biography
          </label>
          <textarea
            name="Biography"
            value={formik.values.Biography}
            type="text"
            className="form-control"
            id="exampleInputtext"
            onChange={formik.handleChange}
          />
        </div>

        <div id="emailHelp" className="form-text">
          We'll never share your details with anyone else.
        </div>

        <button type="submit" className="btn btn-primary auBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AuthorFormik;
