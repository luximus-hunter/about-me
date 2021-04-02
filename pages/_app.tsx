import './globals.scss';

import Container from '../components/Container';

const App = ({ Component, pageProps }) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
