import Card from './components/Card';
import Container from './components/Container';
import Header from './sections/Header';
import Row from './components/Row';
import imgDiscord from './assets/logos/discord.png';
import imgGithub from './assets/logos/github.png';
import imgSpotify from './assets/logos/spotify.png';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.app}>
    <Header />
    <Container>
      <Row>
        <Card
          title='Spotify'
          info='LXMS'
          image={imgSpotify}
          link='https://open.spotify.com/user/yxmq93tlmfomm2ir62cs0bq0u'
        />
        <Card
          title='Github'
          info='luximus-hunter'
          image={imgGithub}
          link='https://github.com/luximus-hunter'
        />
        <Card title='Discord' info='Luximus#2048' image={imgDiscord} />
      </Row>
    </Container>
  </div>
);

export default App;
