import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Routes from './routes';
import Examples from '../components/Examples';
import Tictac from '../components/Tictac';

const AppRouter = (props) => (
  <BrowserRouter>
    <Switch>
        <Route path={Routes.TICTAC} component={Tictac} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;