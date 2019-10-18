import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from './router.config';
import RouterView from './routerView';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <RouterView routes={routes}/>
            </BrowserRouter>
        )
    }
}
