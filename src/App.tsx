import About from './sections/About';
import Card from './components/Card';
import Container from './components/Container';
import Divider from './components/Divider';
import Header from './sections/Header';
import Row from './components/Row';
import styles from './App.module.scss';

const App = () => (
    <div className={styles.app}>
        <Header />
        <About />
        <Divider color='#15140E' />
        <Container>
            <Row>
                <Card
                    icon='spotify'
                    title='Spotify'
                    info='LXMS'
                    link='https://open.spotify.com/user/yxmq93tlmfomm2ir62cs0bq0u'
                />
                <Card
                    icon='github'
                    title='Github'
                    info='luximus-hunter'
                    link='https://github.com/luximus-hunter'
                />
                <Card title='Discord' info='Luximus#2048' icon='discord' />
            </Row>
        </Container>
    </div>
);

export default App;
