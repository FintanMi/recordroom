import React from 'react'
import styles from '../styles/MainNew.module.css'
import CardContainerNew from './CardContainerNew'

const MainNew = () => {
  return (
    <div className={styles.MainNew}>
        <div className={styles.NavTop}>
            topbar
        </div>
        <CardContainerNew />
    </div>
  )
}

export default MainNew