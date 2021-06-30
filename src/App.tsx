import React from 'react';
import GlobalStyles from './theme/GlobalStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App: React.FC = () => (
    <>
        <GlobalStyles />
        <BrowserRouter>
            <Switch>
                <Route path="/"></Route>
            </Switch>
        </BrowserRouter>
    </>
);

export default App;
