import React, { useContext } from 'react'
import styles from '../styles/MainNew.module.css'
import {ReactComponent as Right} from '../assets/right.svg'
import {ReactComponent as Left} from '../assets/left.svg'
import {Link} from 'react-router-dom'
import { CurrentUserContext } from '../App'

const NavTopbar = () => {
    const currentUser = useContext(CurrentUserContext);
    const loggedInIcons = <>{currentUser?.username}</>
    const loggedOutIcons = (
        <div className={styles.NavTopNavigationBtns}>
            <Link to='/register' className={styles.NavTopBtnLeft}>Register</Link>
            <Link to='/login' className={styles.NavTopBtnRight}>Login</Link>
        </div>
    )
    return (
        <div className={styles.NavTop}>
            <div className={styles.NavTopBtnContainer}>
                <div className={styles.NavTopNavigationBtnsLeft}>
                    <span className={styles.NavTopBtnLeftArrow}><Left /></span>
                    <span className={styles.NavTopBtn}><Right /></span>
                </div>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </div>
        </div>
    )
}

export default NavTopbar