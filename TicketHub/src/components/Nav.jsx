import { Link } from "react-router-dom";
import React from "react";

function Nav(){
    return(
        <>
    <nav className="nav justify-content-center bg-dark p-3 mb-4">
      <Link to="/electronic" className="nav-link text-light">Electronic</Link>
      <Link to="/rock" className="nav-link text-light">Rock</Link>
      <Link to="/indie" className="nav-link text-light">Indie</Link>
    </nav>
        </>
    )
}

export default Nav