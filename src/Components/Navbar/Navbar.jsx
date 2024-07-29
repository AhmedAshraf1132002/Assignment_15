import React from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
    <nav>
    <div className="p-4 shadow navbar navbar-expand fixed-top py-5 bg-[#2c3e50]">
        <div className="container mx-auto flex justify-between items-center fw-bold">
        <div className="nav-text">
          <a className="anchor" href="#">START FRAMEWORK</a>
        </div>
          <div className="nav-links">
            <ul className="flex gap-3">
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
     
    </>
  );
}
