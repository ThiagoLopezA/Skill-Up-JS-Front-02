import React from "react";
import { Link } from "react-router-dom";
import AsideNavbar from "./components/AsideNavbar/AsideNavbar";
import Topbar from "./components/Topbar/Topbar";

export default function ClientLayout({ children }) {
  return (
    <div className="row d-flex flex-row">
      <div className="d-none d-md-flex col-md-2 p-0">
        <AsideNavbar />
      </div>
      <div className="col-12 col-md-10 p-0">
        <Topbar />
        <div className="container-fluid">{children}</div>
      </div>
    </div>
    // <nav className="navbar navbar-expand-lg bg-light">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#">
    //       Alkybank
    //     </a>
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarText"
    //       aria-controls="navbarText"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarText">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         {elements.map((e, i) => {
    //           return (
    //             <li key={e + i} className="nav-item">
    //               <Link className="nav-link" to={e.route}>
    //                 {e.text}
    //               </Link>
    //             </li>
    //           );
    //         })}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
