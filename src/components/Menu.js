import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Library</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" activeClassName="active" exact>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list" activeClassName="active">List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add" activeClassName="active">Add</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/categories" activeClassName="active">Categories</Link>
            </li>
            
            <li><a className="dropdown-item" href="/login">Login</a></li>
                <li><a className="dropdown-item" href="/register">Registration</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;