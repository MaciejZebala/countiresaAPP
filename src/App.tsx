import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Continents } from './pages/ContinentsPage';
import { Countries } from './pages/CountriesPage';
import { HomePage } from './pages/HomePage';
import { Navigation } from './components/Navigation/Navigation';

const App: React.FC = () => (
    <>
        <GlobalStyles />
        <BrowserRouter>
            <Switch>
                {/* <Navigation /> */}
                <Route path="/continents/:code">
                    <Countries />
                </Route>
                <Route exact path="/continents">
                    <Continents />
                </Route>
                <Route exact path="/">
                    <HomePage />
                </Route>
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
