import React from 'react'
import styles from './AsideNavbar.module.css'
import Nav from '../Nav/Nav'

export default function AsideNavbar() {
  return (
    <section className={`${styles.menu_wrapper}`}>
      <div>
        <div className={`${styles.brand}`}>alkybank</div>
        <Nav />
      </div>
    </section>
  )
}
