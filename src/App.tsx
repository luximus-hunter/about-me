import { FC, Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Spinner from './components/Spinner';
import config from './config.json';

const App: FC = () => (
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

export default App;
