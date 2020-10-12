import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import MapaOrfanatos from './pages/MapaOrfanatos';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/orfanatos" component={MapaOrfanatos}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;