import React from 'react'
import AsideNavbar from './components/AsideNavbar/AsideNavbar'
import Topbar from './components/Topbar/Topbar'
import styles from './ClientLayout.module.css'
import { Outlet } from 'react-router-dom'

export default function ClientLayout() {
  return (
    <div className="container-fluid">
      <div className="row d-flex flex-row">
        <div className="d-none d-md-flex col-md-3 p-0 position-relative">
          <AsideNavbar />
        </div>
        <div className="col-12 col-md-9 p-0 ">
          <Topbar />
          <div className={`container-fluid ${styles.content}`}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
