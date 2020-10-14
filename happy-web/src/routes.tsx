import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import MapaOrfanatos from './pages/MapaOrfanatos';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/mapa" component={MapaOrfanatos}/>
                <Route path="/orfanatos/cadastrar" component={CreateOrphanage}/>
                <Route path="/orfanatos/:id" component={Orphanage}/>
            </Switch>
        </BrowserRouter>

    );
}

export default Routes;