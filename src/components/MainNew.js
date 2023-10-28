import React from 'react'
import styles from '../styles/MainNew.module.css'
import CardContainerNew from './CardContainerNew'
import {Switch, Route} from 'react-router-dom'
import Playlist from '../pages/Playlist'

const MainNew = () => {
  return (
    <div className={styles.MainNew}>
        <div className={styles.NavTop}>
            topbar
        </div>
        <Switch>
            <Route path='/' exact component={CardContainerNew}></Route>
            <Route path='/search'>Search</Route>
            <Route path='/library'>Library</Route>
            <Route path='/playlist/:id' component={Playlist}></Route>
        </Switch>
        
    </div>
  )
}

export default MainNew