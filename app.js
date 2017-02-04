import React from 'react';
import OnePerson from './app/components/onePerson'
import ReactDOM from 'react-dom';

import Main from './app/components/Main';
import Home from './app/components/Home'
import ResultField from './app/components/ResultField'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="OnePerson" component={OnePerson} />
            <Route path="ResultField/:query" component={ResultField} />
        </Route>
    </Router>
    ,
    document.getElementById('root')
);

