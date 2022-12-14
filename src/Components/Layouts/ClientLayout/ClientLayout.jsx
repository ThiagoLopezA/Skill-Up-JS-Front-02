import React from "react";
import AsideNavbar from "./components/AsideNavbar/AsideNavbar";
import styles from "./ClientLayout.module.css";
import { Outlet } from "react-router-dom";
import TopbarContainer from "./components/Topbar/TopbarContainer";

export default function ClientLayout() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row">
        <div className="d-none d-md-flex col-md-3 p-0">
          <AsideNavbar />
        </div>
        <div className="col-12 col-md-9 p-0 ">
          <TopbarContainer />
          <div className={`container-fluid ${styles.content}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
