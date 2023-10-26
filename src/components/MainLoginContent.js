import React from 'react'
import styles from '../styles/MainLoginContent.module.css'
import CardContainer from './CardContainer'

function MainLoginContent() {
  return (
    <>
        <div className={styles.MainLoginContent}>
            <h2>Playlists</h2>
            <div className={styles.MainLoginContentRow}>
                <CardContainer />
            </div>
        </div>
        <div className={styles.MainLoginContent}>
            <h2>Audiobooks</h2>
            <div className={styles.MainLoginContentRow}>
                <CardContainer />
                <CardContainer />
                <CardContainer />
                <CardContainer />
            </div>
        </div>
    </>
    

  )
}

export default MainLoginContent