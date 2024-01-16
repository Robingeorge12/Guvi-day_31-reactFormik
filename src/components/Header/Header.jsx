import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ONE">
        <Link class="navbar_link active" aria-current="page" to="/">AUTHOR FORM</Link>
        <Link class="navbar_link" to="/author">AUTHOR LIST</Link>
        <Link class="navbar_link" to="/bookform">BOOK FORM</Link>
        <Link class="navbar_link"  to="/book" aria-disabled="false">BOOK LIST</Link>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Header