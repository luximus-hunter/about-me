import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { FC } from 'react';
import Home from './pages/Home';

const App: FC = () => {
  let lang: string = navigator.language;

  if (lang === 'en-US' || lang === 'en-GB') {
    lang = 'en';
  }

  if (!localStorage.getItem('lang')) {
    localStorage.setItem('lang', lang);
  }

  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
};

export default App;
