import React from 'react'
import styles from '../styles/MainNew.module.css'
import CardContainerNew from './CardContainerNew'
import {Switch, Route} from 'react-router-dom'
import Playlist from '../pages/Playlist'
import {ReactComponent as Right} from '../assets/right.svg'
import {ReactComponent as Left} from '../assets/left.svg'


const MainNew = () => {
  return (
    <div className={styles.MainNew}>
        <div className={styles.NavTop}>
            <div className={styles.NavTopBtnContainer}>
                <div className={styles.NavTopNavigationBtnsLeft}>
                    <span className={styles.NavTopBtnLeft}><Left /></span>
                    <span className={styles.NavTopBtn}><Right /></span>
                </div>
                <div className={styles.NavTopNavigationBtns}>
                    <span><button className={styles.NavTopBtnLeft}>Register</button></span>
                    <span><button className={styles.NavTopBtnRight}>Login</button></span>
                </div>
            </div>
        </div>
        <Switch>
            <Route path='/' exact component={CardContainerNew}></Route>
            <Route path='/search'>Search</Route>
            <Route path='/library'>Library</Route>
            <Route path='/playlist/:id' component={Playlist}></Route>
            <Route path='/register'>Register</Route>
            <Route path='/login'>Login</Route>
        </Switch>
    </div>
  )
}

export default MainNew