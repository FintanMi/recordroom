import React from 'react'
import styles from '../../App.module.css'
import NavBar from '../../components/NavBar'


function Login() {
  return (
    <div className={styles.outerMain}>
        <div className={styles.LoginApp}>
            <NavBar />
            
        </div>
        <div className={styles.PlaybarLogin}>
                playbar
        </div>
    </div>
  )
}

export default Login