import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
<div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <ul>
            <li className="navbar-brand">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Google Books
            </Link>
            </li>
            </ul>
     
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
   </button>

   <div className="navDiv">
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link
                    to="/search"
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
                >
                    Search
      </Link>
      
      </li>
      <li className="nav-item">
      <Link
                    to="/saved"
                    className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
                >
                    Saved
            </Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>

  

    
    );
};

export default Nav;



