import React from 'react'
import Loadable from 'react-loadable';

function Loading() {
    return (
        <div>
            Loading...
        </div>
    )
}

export default [{
    type: 'route',
    path: '/index',
    component: Loadable({
        loader: () =>
            import ('@/Views/Index'),
        loading: Loading,
    }),
    routes: [{
        type: 'route',
        path: '/index/home',
        component: Loadable({
            loader: () =>
                import ('@/Views/Index/Home'),
            loading: Loading,
        }),
        routes: []
    },{
        type: 'route',
        path: '/index/bind',
        component: Loadable({
            loader: () =>
                import ('@/Views/Index/Bind'),
            loading: Loading,
        }),
        routes: []
    },{
        type: 'route',
        path: '/index/forum',
        component: Loadable({
            loader: () =>
                import ('@/Views/Index/Forum'),
            loading: Loading,
        }),
        routes: []
    },{
        type: 'route',
        path: '/index/twocar',
        component: Loadable({
            loader: () =>
                import ('@/Views/Index/Twocar'),
            loading: Loading,
        }),
        routes: []
    }, {
        type: 'redirect',
        from: '/index',
        to: '/index/home'
    }]
}, {
    type: 'route',
    path: '/login',
    component: Loadable({
        loader: () =>
            import ('@/Views/Login'),
        loading: Loading,
    }),
    routes: []
}, {
    type: 'route',
    path: '/search',
    component: Loadable({
        loader: () =>
            import ('@/Views/Search'),
        loading: Loading,
    }),
    routes: []
}, {
    type: 'route',
    path: '/my',
    component: Loadable({
        loader: () =>
            import ('@/Views/My'),
        loading: Loading,
    }),
    routes: []
}, {
    type: 'redirect',
    from: '/',
    to: '/index'
}]