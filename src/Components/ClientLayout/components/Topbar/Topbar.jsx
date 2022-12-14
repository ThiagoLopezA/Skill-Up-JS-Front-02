import React from 'react'
import { useState } from 'react'
import Button from '../../../Button/Button'
import styles from './Topbar.module.css'
import Nav from '../Nav/Nav'

export default function Topbar() {
  const [visibility, setVisibility] = useState(false)
  const handleVisibility = () => setVisibility(!visibility)

  const menuIcon = (
    <svg
      width="1.5em"
      height="1.5em"
      aria-hidden="true"
      aria-label="menu"
      focusable="false"
      viewBox="0 0 24 24"
      className="c-pEEFS c-pEEFS-bfAFXs-size-md"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d='M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z",",M3 19h18v-1H3v1Zm0-6h18v-1H3v1Zm0-7v1h18V6H3Z'
      ></path>
    </svg>
  )

  const closeIcon = (
    <svg
      width="1.5em"
      height="1.5em"
      aria-hidden="true"
      aria-label="close"
      focusable="false"
      viewBox="0 0 24 24"
      className="c-pEEFS c-pEEFS-bfAFXs-size-md"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d='m12.629 11.833 5.555-5.477a.5.5 0 0 0-.702-.712l-5.565 5.487L6.35 5.644a.5.5 0 0 0-.702.712l5.555 5.477-5.555 5.478a.5.5 0 0 0 .702.712l5.566-5.487 5.565 5.487a.5.5 0 0 0 .702-.712l-5.555-5.478Z",",m12.629 11.833 5.555-5.477a.5.5 0 0 0-.702-.712l-5.565 5.487L6.35 5.644a.5.5 0 0 0-.702.712l5.555 5.477-5.555 5.478a.5.5 0 0 0 .702.712l5.566-5.487 5.565 5.487a.5.5 0 0 0 .702-.712l-5.555-5.478Z'
      ></path>
    </svg>
  )

  return (
    <>
      <section
        className={`container-fluid ${styles.topbar} d-flex justify-content-between`}
      >
        <button
          onClick={handleVisibility}
          className={`${styles.icon_button} d-md-none`}
        >
          {menuIcon}
        </button>
        <div className={`${styles.brand} d-md-none`}>Alkybank</div>
        <div className={`${styles.user_topbar} d-none d-md-flex`}>
          <div className={`${styles.avatar}`}>US</div>
          <span className={`${styles.username}`}>Nombre Apellido Usuario</span>
        </div>
        <div className="d-none d-md-flex">
          <Button variant="secondary" size="md">
            Cerrar sesión
          </Button>
        </div>
        <div className="d-md-none"></div>
      </section>

      {visibility && (
        <section className={`${styles.menu_wrapper} d-md-none`}>
          <div className={`${styles.menu} pb-4`}>
            <div>
              <button
                onClick={handleVisibility}
                className={`${styles.icon_button}`}
              >
                {closeIcon}
              </button>
              <div className={`${styles.menu_header}`}>
                <div className={`${styles.avatar}`}>US</div>
                <span className={`${styles.username}`}>
                  Nombre Apellido Usuario
                </span>
              </div>
              <Nav />
            </div>
            <Button variant="secondary" size="md">
              Cerrar sesión
            </Button>
          </div>
        </section>
      )}
    </>
  )
}
