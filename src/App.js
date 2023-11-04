import styles from './AppNew.module.css'
import NavBarNew from './components/SidebarNew';
import MainNew from './components/MainNew';
import PlayBar from './components/Playbar';
import './api/axiosDefaults';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { SetCurrentUserContext } from './context/CurrentUserContext';

export const CurrentUserContext = createContext();
export const setCurrentUserContext = createContext();

const App = () => {
    const [currentUser, setCurrentUser] = useState(null);

    const handleMount = async () => {
        try {
            const {data} = await axios.get('dj-rest-auth/user/')
            setCurrentUser(data)
        } catch(err) {
            console.log(err);
        };
    }

    useEffect(() => {
        handleMount()
    }, [])

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={setCurrentUser}>
                <div className={styles.outerWrap}>
                        <div className={styles.AppNew}>
                            <NavBarNew />
                            <MainNew />
                        </div>
                        <div className={styles.musicControls}>
                            <PlayBar />
                        </div>
                </div>
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );
}

export default App;