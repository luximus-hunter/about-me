import { FC, Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Spinner from './components/Spinner';
import config from './config.json';

const App: FC = () => {
  let lang: string = navigator.language;

  if (lang === 'en-US' || lang === 'en-GB') {
    lang = 'en';
  }

  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', lang);
  }

  return (
    <Suspense fallback={Spinner}>
      <Router>
        <Switch>
          <Route path='/' exact render={() => <Redirect to={'/' + config.defaultLanguage} />} />
          <Route path='/:lang' exact component={Home} />
          <Redirect to='/' />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
