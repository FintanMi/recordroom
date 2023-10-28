import React from 'react'
import styles from '../AppNew.module.css'
import {ReactComponent as LibraryIcon} from '../assets/library.svg'
import {ReactComponent as HomeIcon} from '../assets/home.svg'
import {ReactComponent as SearchIcon} from '../assets/search.svg'
import {Link} from 'react-router-dom'

const NavBarNew = () => {
  return (
    <div>
        <div className={styles.navBar}>
            <div className={styles.logo}>
                <h4>Record Room</h4>
            </div>
            <ul>
                <Link to='/'><li><HomeIcon className={styles.HomeIcon} />Home</li></Link>
                <Link to='/search'><li><SearchIcon />Search</li></Link>
                <Link to='/library'><li><LibraryIcon />Library</li></Link>
            </ul>
            <div className={styles.copy}>
                <span>copyright</span>
            </div>
        </div>
    </div>
  )
}

export default NavBarNew