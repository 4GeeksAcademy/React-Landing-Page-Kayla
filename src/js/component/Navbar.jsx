import React from "react";

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link Active" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link About" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link Services" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link Contact" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar