import styles from './AppNew.module.css'
import NavBarNew from './components/SidebarNew';
import MainNew from './components/MainNew';

const App = () => {

    return (
        <div className={styles.outerWrap}>
            <div className={styles.AppNew}>
                <NavBarNew />
                <MainNew />
            </div>
            <div className={styles.musicControls}>playbar</div>
        </div>
        
    );
}

export default App;