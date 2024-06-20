import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link Active" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link About" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link Services" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link Contact" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar