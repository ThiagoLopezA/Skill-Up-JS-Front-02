import React from "react";
import { useState } from "react";
import Button from "../../../../Button/Button";
import styles from "./Topbar.module.css";
import Nav from "../Nav/Nav";

import "./AsideActive.css";

export default function Topbar({
  icons,
  user,
  handleMenu,
  menuVisibility,
  logout,
}) {
  return (
    <>
      <section
        className={`container-fluid ${styles.topbar} d-flex justify-content-between`}
      >
        <button
          onClick={handleMenu}
          className={`${styles.icon_button} d-md-none`}
        >
          {icons.menuIcon}
        </button>
        <div className={`${styles.brand} d-md-none`}>Alkybank</div>
        <div className={`${styles.user_topbar} d-none d-md-flex`}>
          <img
            className="rounded-circle"
            width={45}
            height={45}
            style={{ objectFit: "cover", marginRight: "10px" }}
            src={user.avatar}
            alt="Avatar"
          />
          <span
            className={`${styles.username}`}
          >{`${user.firstName} ${user.lastName}`}</span>
        </div>
        <div className="d-none d-md-flex">
          <Button variant="secondary" size="md" handleClick={logout}>
            Cerrar sesión
          </Button>
        </div>
        <div className="d-md-none"></div>
      </section>

      {/* HIDDEN/SHOW */}
      <section
        className={`AsideActive ${menuVisibility ? "active" : ""} d-md-none`}
      >
        <div className={`${styles.menu} pb-4`}>
          <div>
            <button onClick={handleMenu} className={`${styles.icon_button}`}>
              {icons.closeIcon}
            </button>
            <div className={`${styles.menu_header}`}>
              <img
                className="rounded-circle"
                width={45}
                height={45}
                style={{ objectFit: "cover", marginRight: "10px" }}
                src={user.avatar}
                alt="Avatar"
              />
              <span className={`${styles.username}`}>
                {`${user.firstName} ${user.lastName}`}
              </span>
            </div>
            <Nav />
          </div>
          <Button variant="secondary" size="md" handleClick={logout}>
            Cerrar sesión
          </Button>
        </div>
      </section>
    </>
  );
}
