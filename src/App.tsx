import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Continents } from './pages/ContinentsPage';
import { Countries } from './pages/CountriesPage';
import { HomePage } from './pages/HomePage';

const App: React.FC = () => (
    <>
        <GlobalStyles />
        <BrowserRouter>
            <Switch>
                <Route exact path="/continents">
                    <Continents />
                </Route>
                <Route path="/continents/:code">
                    <Countries />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
