import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthorFormik from "../components/AuthorFormik/AuthorFormik";
import BookFormik from "../components/BookFormik/BookFormik";
import Author from "../components/Author/Author";
import Book from "../components/Book/Book";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthorFormik />} />
        <Route path="/bookform" element={<BookFormik />} />
        <Route path="/author" element={<Author />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
