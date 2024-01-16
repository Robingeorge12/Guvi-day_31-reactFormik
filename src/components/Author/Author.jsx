import React, { useState } from 'react'
import "./Author.css"
import { useDispatch, useSelector } from 'react-redux';
import {addNewAuthor,editEachAuthor,deleteEachAuthor} from "./../../Redux/author"

function Author() {

  const dispatch = useDispatch();
  const {authors, isLoading, isError} = useSelector((state)=>state.author)
  const [edit, setEdit] = useState();

  // console.log(edit)
  const handleUpdate = ()=>{
    // console.log(edit);
    dispatch(editEachAuthor(edit))

  }
const handledelete = (id)=>{
  dispatch(deleteEachAuthor(id))
}

console.log(authors)


if (isLoading) {
  return (
    <div className="d-flex text-info justify-content-center align-items-center spinner-position">
      <div
        className="spinner-border color-info"
        text-info="true"
        role="status"
      >
        <span className="visually-hidden text-info">Loading...</span>
      </div>
    </div>
  );
}
if (isError) {
  return <h1>Error</h1>;
}

  return (
    <div className="container d-flex flex-column author-container">
    <div className=" bookdiv1"></div>
    <div
      className="row d-flex mt-2
             justify-content-between align-items-center authordiv2"
    >
      {authors?.map((el, i) => {
        return (
          <div
            key={i}
            className="card mb-2 col-sm-12 col-md-6 col-lg-4 d-flex
             justify-content-between align-items-center bookCardDiv"
          >
            <div className="bookCard">
              <div className="title">
                <span className="span1 text-start">AUTHOR NAME</span>
                <h6 className="card-title text-break pd">{el.name}</h6>

                <button
                  type="button"
                  className="ed1"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={() => setEdit(el)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalLabel"
                        >
                          UPDATE AUTHOR'S DATA
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">



                      <div className="mb-3 text-start">
                          <label
                            htmlFor="message-text"
                            className="col-form-label text-success fw-bold"
                          >
                            AUTHOR
                          </label>
                          <input
                            className="form-control message-text"
                            value={edit ? edit.name : ""}
                            onChange={(e) =>
                              setEdit((prev) => {
                                return {
                                  ...prev,
                                  name: e.target.value,
                                };
                              })
                            }
                          />
                        </div>

                        <div className="mb-3 text-start">
                          <label
                            htmlFor="message-text"
                            className="col-form-label text-success fw-bold"
                          >
                            BIOGRAPHY
                          </label>
                          <input
                            className="form-control message-text"
                            value={edit ? edit.Biography : ""}
                            onChange={(e) =>
                              setEdit((prev) => {
                                return {
                                  ...prev,
                                  Biography: e.target.value,
                                };
                              })
                            }
                          />
                        </div>


                        


                        <div className="mb-3 text-start">
                          <label
                            htmlFor="message-text"
                            className="col-form-label text-success fw-bold"
                          >
                           DATE OF BIRTH
                          </label>
                          <input
                          type="date"
                            className="form-control message-text"
                            value={edit ? edit.DOB : ""}
                            onChange={(e) =>
                              setEdit((prev) => {
                                return {
                                  ...prev,
                                  DOB: e.target.value,
                                };
                              })
                            }
                          />
                        </div>

                  


                      </div>

                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          CLOSE
                        </button>
                        <button
                          type="button"
                          data-bs-dismiss="modal"
                          className="btn btn-primary"
                          onClick={handleUpdate}
                        >
                          SAVE CHANGES
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           

              <div className="isbn">
                <span className="span4 text-start">BIOGRAPHY</span>
                <p className="pd bio">{el.Biography}</p>
              </div>
              <div className="date">
                <span className="span3 text-start">DOB</span>
                <p className="pd">{el.DOB}</p>
              </div>
           

              <div className="d-flex align-items-center justify-content-end bookBtn">
                <button onClick={()=>handledelete(el.id)} className="del1">
                  <i className="bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Author