import React from 'react';
import Container from 'react-bootstrap/Container';
import styles from '../styles/Playbar.module.css';

const PlayBar = () => {
  return (
    <div className={styles.PlayBar}>
        <Container className="fixed-bottom">
            playbar
        </Container>
    </div>
  )
}

export default PlayBar