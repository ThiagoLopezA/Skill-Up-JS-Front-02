import React from "react";
import AsideNavbar from "./components/AsideNavbar/AsideNavbar";
import Topbar from "./components/Topbar/Topbar";
import styles from "./ClientLayout.module.css";
import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row">
        <div className="d-none d-md-flex col-md-3 p-0">
          <AsideNavbar />
        </div>
        <div className="col-12 col-md-9 p-0 ">
          <Topbar />
          <div className={`${styles.content}`}>
            <Outlet />
          </div>
        </div>
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
