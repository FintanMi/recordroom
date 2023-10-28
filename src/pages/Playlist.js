import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../styles/Playlist.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'

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
                    <p>like button</p>
                    <p>dots</p>
                </div>
                <div className={styles.PlaylistTable}>
                    <div className={styles.PlaylistTable}>
                        table
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlist