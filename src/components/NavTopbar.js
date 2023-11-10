import React from 'react'
import styles from '../styles/MainNew.module.css'
import {ReactComponent as Right} from '../assets/right.svg'
import {ReactComponent as Left} from '../assets/left.svg'
import {Link} from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const NavTopbar = () => {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const history = useHistory();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch(err) {
            console.log(err);
        }
    }
    ;
    const loggedInIcons = <>
            <div className={styles.NavTopNavigationBtns}>
                <Link to='/discover'>Discover</Link>
                <Link to='/favourites'><i className="fas fa-heart"></i> Favourites</Link>
                <Link to='/' onClick={handleSignOut}><i className='fas fa-sign-out-alt'></i> Sign Out</Link>
                <Link to={`/profiles/${currentUser?.profile_id}`}>
                    <Avatar src={currentUser?.profile_image} text='Profile' height={40} />
                </Link>
            </div>
        </>
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
                    <span className={styles.NavTopBtnLeftArrow}><Left onClick={() => history.goBack()} /></span>
                    <span className={styles.NavTopBtn}><Right onClick={() => history.goForward()} /></span>
                </div>
                {currentUser ? loggedInIcons : loggedOutIcons}
            </div>
        </div>
    )
}

export default NavTopbar