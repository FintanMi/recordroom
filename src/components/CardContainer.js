import React from 'react'
import styles from '../styles/CardContainer.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'

function CardContainer() {
  return (
    <div className={styles.CardContainer}>
        <div className={styles.CardImage}>
            <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
        </div>
        <div className={styles.CardContent}>
            <h5>liked songs</h5>
        </div>
        <span className={styles.PlayIcon}>
            <PlayIcon />
        </span>
    </div>
  )
}

export default CardContainer