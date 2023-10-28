import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/Playlist.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'
import {ReactComponent as HeartIcon} from '../assets/heart.svg'
import { DropdownIcon } from '../components/DropdownIcon'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Playlist = () => {
    const {id} = useParams();
    return (
        <div className={styles.Playlist}>
            <div className={styles.PlaylistPage}>
                <div className={styles.PlaylistInfo}>
                    <div className={styles.PlaylistImage}>
                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="concert crowd" />
                    </div>
                    <div className={styles.PlaylistDescription}>
                        <span>Playlist</span>
                        <h1>Rock Classics</h1>
                        <span>Rock legends & epic songs that continue to inspire generations.</span>
                        <div className={styles.PlaylistDescriptionSub}>
                            <p className={styles.RR}>Record Room</p>
                            <span>&#x25CF;    11,870,221 likes</span>
                            <span>&#x25CF;    200 songs, about 15 hours</span>
                        </div>
                    </div>
                </div>
                <div className={styles.PlaylistInfoSubSection}>
                    <span className={styles.PlayIcon}>
                        <PlayIcon />
                    </span>
                    <div className={styles.PlaylistInfoSubSectionIcons}>
                        <span className={styles.HeartIcon}>
                            <HeartIcon />
                        </span>
                        <span className={styles.ThreeIcons}>
                            <DropdownIcon />
                        </span>
                    </div>
                    
                </div>
                <div className={styles.PlaylistTable}>
                    <div className={styles.PlaylistTable}>
                        <Container fluid>
                            <Row>
                                <Col>#</Col>
                                <Col>Title</Col>
                                <Col>Album</Col>
                                <Col>Date Added</Col>
                                <Col>Duration</Col>
                            </Row>
                            <Row className={styles.SongRows}>
                                <Col>1</Col>
                                <Col>
                                    <div className={styles.PlaylistTableSongInfo}>
                                        <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D" alt="concert crowd" />
                                        <span>I Wanna Be Sedated</span>
                                        <span>Ramones</span>
                                    </div>
                                </Col>
                                <Col>Road To Ruin</Col>
                                <Col>2 weeks ago</Col>
                                <Col>2:29</Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist