import React from 'react'
import styles from '../../App.module.css'
import NavBar from '../../components/NavBar'
import MainLogin from '../../components/MainLogin'

function Login() {
  return (
    <div className={styles.outerMain}>
        <div className={styles.LoginApp}>
            <NavBar />
            <MainLogin />
        </div>
        <div className={styles.PlaybarLogin}>
                playbar
        </div>
    </div>
  )
}

export default Login