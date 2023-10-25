import React from 'react'
import styles from '../styles/CardContainer.module.css'
import style from '../styles/CardImage.module.css'
import styled from '../styles/CardContent.module.css'

function CardContainer() {
  return (
    <div className={styles.CardContainer}>
        <div className={style.CardImage}>
            <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
        </div>
        <div className={styled.CardContent}>
            <h5>liked songs</h5>
        </div>
    </div>
  )
}

export default CardContainer