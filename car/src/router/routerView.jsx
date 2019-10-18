import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';

export default function routerView(props) {
    let {routes}=props;
    return (
        <Switch>
            {
                routes&&routes.map((it,inx)=>{
                    if(it.to){
                        return <Redirect key={inx} from={it.from} to={it.to}/>
                    }else{
                        return <Route key={inx} path={it.path} render={(props)=>{
                            return <it.component {...props} routes={it.routes}/>
                        }}/>
                    }
                })
            }
        </Switch>
    )
}
