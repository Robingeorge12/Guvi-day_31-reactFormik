import React, { useState } from "react";
import "./Book.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useDispatch, useSelector } from "react-redux";
import { deleteEachBook, editEachBook } from "../../Redux/book";
 
function Book() {
  const dispatch = useDispatch();
  const { books, isLoading, isError } = useSelector((state) => state.book);
  const [edit, setEdit] = useState();

  // console.log(edit);
  // console.log(books);
  const handleUpdate = ()=>{
    // console.log(edit);
    dispatch(editEachBook(edit))

  }
const handledelete = (id)=>{
  dispatch(deleteEachBook(id))
}

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
    <div className="container d-flex flex-column book-container">
      <div className=" bookdiv1"></div>
      <div
        className="row d-flex mt-2
               justify-content-between align-items-center bookdiv2"
      >
        {books?.map((el, i) => {
          return (
            <div
              key={i}
              className="card mb-2 col-sm-12 col-md-6 col-lg-4 d-flex
               justify-content-between align-items-center bookCardDiv"
            >
              <div className="bookCard">
                <div className="title">
                  <span className="span1 text-start">TITLE</span>
                  <h6 className="card-title text-break pd">{el.title}</h6>

                  <button
                    type="button"
                    className="ed"
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
                            UPDATE BOOK'S DATA
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
                              TITLE
                            </label>
                            <input
                              className="form-control message-text"
                              value={edit ? edit.title : ""}
                              onChange={(e) =>
                                setEdit((prev) => {
                                  return {
                                    ...prev,
                                    title: e.target.value,
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
                              AUTHOR
                            </label>
                            <input
                              className="form-control message-text"
                              value={edit ? edit.author : ""}
                              onChange={(e) =>
                                setEdit((prev) => {
                                  return {
                                    ...prev,
                                    author: e.target.value,
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
                              PUBLISH DATE
                            </label>
                            <input
                            type="date"
                              className="form-control message-text"
                              value={edit ? edit.date : ""}
                              onChange={(e) =>
                                setEdit((prev) => {
                                  return {
                                    ...prev,
                                    date: e.target.value,
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
                              ISBN
                            </label>
                            <input
                              className="form-control message-text"
                              value={edit ? edit.ISBN : ""}
                              onChange={(e) =>
                                setEdit((prev) => {
                                  return {
                                    ...prev,
                                   ISBN: e.target.value,
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
                <div className="author">
                  <span className="span2 text-start">AUTHOR</span>
                  <p className="pd">{el.author}</p>
                </div>
                <div className="date">
                  <span className="span3 text-start">PUBLISH DATE</span>
                  <p className="pd">{el.date}</p>
                </div>
                <div className="isbn">
                  <span className="span4 text-start">ISBN</span>
                  <p className="pd">{el.ISBN}</p>
                </div>

                <div className="d-flex align-items-center justify-content-end bookBtn">
                  <button onClick={()=>handledelete(el.id)} className="del">
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Book;
