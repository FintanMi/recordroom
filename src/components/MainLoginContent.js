import React from 'react'
import styles from '../styles/MainLoginContent.module.css'
import CardContainer from './CardContainer'

function MainLoginContent() {
  return (
    <div className={styles.MainLoginContent}>
        <h2>Playlists</h2>
        <CardContainer />
    </div>
  )
}

export default MainLoginContent