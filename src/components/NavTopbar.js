import React from 'react'
import styles from '../styles/MainNew.module.css'
import {ReactComponent as Right} from '../assets/right.svg'
import {ReactComponent as Left} from '../assets/left.svg'
import {Link} from 'react-router-dom'

const NavTopbar = () => {
  return (
    <div className={styles.NavTop}>
        <div className={styles.NavTopBtnContainer}>
            <div className={styles.NavTopNavigationBtnsLeft}>
                <span className={styles.NavTopBtnLeftArrow}><Left /></span>
                <span className={styles.NavTopBtn}><Right /></span>
            </div>
            <div className={styles.NavTopNavigationBtns}>
                <Link to='/register' className={styles.NavTopBtnLeft}>Register</Link>
                <Link to='/login' className={styles.NavTopBtnRight}>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default NavTopbar