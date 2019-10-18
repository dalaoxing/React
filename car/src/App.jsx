import React,{Component} from 'react';
import Router from '@/Router';
import {Provider} from 'react-redux';
import store from '@/store';

class App extends Component{
    render(){
        return <Provider store={store}>
            <div className="app">
                <Router />
            </div>
        </Provider>
        
    }
}

export default App;