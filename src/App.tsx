import { FC, Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Skills from './pages/Skills';
import Spinner from './components/Spinner';
import config from './config.json';

const App: FC = () => (
  <Suspense fallback={Spinner}>
    <Router>
      <Switch>
        {/* no-lang pages */}
        <Route path='/' exact render={() => <Redirect to={'/' + config.defaultLanguage} />} />
        <Route
          path='/skills'
          exact
          render={() => <Redirect to={'/' + config.defaultLanguage + '/skills'} />}
        />

        {/* lang pages */}
        <Route path='/:lang' exact component={Home} />
        <Route path='/:lang/skills' exact component={Skills} />

        {/* fallback */}
        <Redirect to='/' />
      </Switch>
    </Router>
  </Suspense>
);

export default App;
