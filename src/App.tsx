import About from './sections/About';
import Divider from './components/Divider';
import Header from './sections/Header';
import Socials from './sections/Socials';
import styles from './App.module.scss';

const App = () => (
    <div className={styles.app}>
        <Header />
        <About />
        <Divider color='#15140E' />
        <Socials />
    </div>
);

export default App;
