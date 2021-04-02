import './globals.scss';

import Container from '../components/Container';
import { useEffect } from 'react';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    let lang: string = navigator.language;

    if (lang === 'en-US' || lang === 'en-GB') {
      lang = 'en';
    }

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', lang);
    }
  });

  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
