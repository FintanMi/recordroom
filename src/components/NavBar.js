import React from 'react'
import styles from '../App.module.css'

function NavBar() {
  return (
    <div className={styles.NavBar}>
        <div className={styles.logo}>
            Record Room
        </div>
        <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Your Library</li>
        </ul>
        <div className={styles.copyright}>
            <span>copyright</span>
        </div>
    </div>
  )
}

export default NavBar