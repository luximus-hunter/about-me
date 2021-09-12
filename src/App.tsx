import About from './sections/About';
import Card from './components/Card';
import Container from './components/Container';
import Divider from './components/Divider';
import Header from './sections/Header';
import Row from './components/Row';
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
