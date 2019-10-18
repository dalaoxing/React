import React, { Component } from 'react';
import {Switch,Redirect,Route} from 'react-router-dom';

export default class routerView extends Component {
    render() {
        let {routes}=this.props;
        return (
            <Switch>
                {
                    routes.map((it,inx)=>{
                        if(it.type==='route'){
                            return <Route key={inx} path={it.path} render={(props)=>{
                                return <it.component {...props} routes={it.routes}/>
                            }}/>
                        }else{
                            return <Redirect from={it.from} to={it.to}  key={inx}/>
                        }
                    })
                }
            </Switch>
        )
    }
}
