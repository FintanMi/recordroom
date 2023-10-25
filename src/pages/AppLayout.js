import React from 'react'
import Content from '../components/Content'
import Sidebar from '../components/Sidebar'
import Playbar from '../components/Playbar'
import styles from '../styles/AppLayout.module.css'

function AppLayout() {
  return (
    <div className={styles.app}>
        <Content />
        <Sidebar />
        <Playbar />
    </div>
  )
}

export default AppLayout