import React from 'react'
import styles from '../styles/MainNew.module.css'
import CardContainerNew from './CardContainerNew'
import {Switch, Route} from 'react-router-dom'
import Playlist from '../pages/Playlist'
import NavTopbar from './NavTopbar'
import Register from '../pages/auth/Register'

const MainNew = () => {
  return (
    <>
        <div className={styles.MainNew}>
            <NavTopbar />
            <Switch>
                <Route path='/' exact component={CardContainerNew}></Route>
                <Route path='/search'>Search</Route>
                <Route path='/library'>Library</Route>
                <Route path='/playlist/:id' component={Playlist}></Route>
                <Route path='/register' exact render={() => <Register />}></Route>
            </Switch>
        </div>
        
    </>
    
  )
}

export default MainNew