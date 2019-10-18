import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import routes from './index.config';
import RouterView from './routerView';

export default function router() {
    return (
        <BrowserRouter>
            <RouterView routes={routes}/>
        </BrowserRouter>
    )
}
