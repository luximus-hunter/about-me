import About from './sections/About';
import Divider from './components/Divider';
import Header from './sections/Header';
import Skills from './sections/Skills';
import Socials from './sections/Socials';
import Tools from './sections/Tools';
import styles from './App.module.scss';

const App = () => (
    <div className={styles.app}>
        <Header />
        <About />
        <Divider from='#15140E' to='#FFFFFF' />
        <Socials />
        <Divider from='#FFFFFF' to='#9966FF' />
        <Skills />
        <Divider from='#9966FF' to='#FFFFFF' />
        <Tools />
    </div>
);

export default App;
