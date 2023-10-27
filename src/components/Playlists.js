import React from 'react'
import styles from '../styles/MainNew.module.css'
import {ReactComponent as PlayIcon} from '../assets/playIcon.svg'

const Playlists = (props) => {
    const playlistData = [
        {
            id: 101,
            category_id: 3,
            name: 'Podcasts 1',
        },
        {
            id: 102,
            category_id: 3,
            name: 'Podcasts 2',
        },
        {
            id: 103,
            category_id: 3,
            name: 'Podcasts 3',
        },
        {
            id: 104,
            category_id: 1,
            name: 'Playlist 1',
        },
        {
            id: 105,
            category_id: 1,
            name: 'Playlist 2',
        },
        {
            id: 106,
            category_id: 2,
            name: 'Audiobook 1',
        },
        {
            id: 107,
            category_id: 3,
            name: 'Audiobook 4',
        },
    ]

    const filteredPlaylist = playlistData.filter(playlist => playlist.category_id === props.category_id)

    return (
        <div className={styles.CardsWrapInner}>
            {filteredPlaylist.map(playlist => (
                <div className={styles.Card}>
                <div className={styles.CardImage}>
                    <img src="https://cdn.pixabay.com/audio/2023/02/20/13-18-40-936_200x200.png" alt='profile' />
                </div>
                <div className={styles.CardContent}>
                    <h5>{playlist.name}</h5>
                    <span>your favourite music</span>
                </div>
                <span className={styles.PlayIcon}>
                    <PlayIcon />
                </span>
            </div>
            ))}
        </div>
    )
}

export default Playlists