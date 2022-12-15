import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import icon from "../assets/coolicon.png";

const Navbar = () => {
   return (
      <div>
         <nav className="navbar navbar-expand-lg py-0 bg-transparent" style={{zIndex: "100000"}}>
            <div className="container">
               <Link to="/" className="navbar-brand py-2">
                  <img src={logo} alt="Logo" />
               </Link>
               <button className="navbar-toggler border-0 p-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <img alt="icon" src={icon}></img>
               </button>
               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul className="navbar-nav ms-auto mb-2 gap-3 mb-lg-0">
                     <li className="nav-item">
                        <Link to="/buypack" className="nav-link text-light" aria-current="page">
                           Buy PACK
                        </Link>
                     </li>
                     <li className="nav-item">
                        <Link to="/marketplace" className="nav-link text-light">
                           Marketplace
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;
