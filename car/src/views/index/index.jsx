import React, { Component } from 'react';
import islogin from '@/guard/islogin';
import RouterView from '@/router/routerView';

class index extends Component {
    state={
        list:[
            {
                title:'首页',
                path:'/index/home'
            },{
                title:'沐恩动态',
                path:'/index/dynamic'
            },{
                title:'主站资料',
                path:'/index/data'
            },{
                title:'留言板',
                path:'/index/message'
            },{
                title:'我的',
                path:'/index/my'
            }
        ],
        path:'/index/home'
    }
    render() {
        let {routes}=this.props;
        let {list,path}=this.state;
        return (
            <div className="index">
                <RouterView routes={routes}/>
                <div className="foot">
                    {
                        list.map((it,inx)=>{
                            return <p key={inx} className={path===it.path?'ave':''} onClick={this.jump.bind(this,it.path)}>{it.title}</p>
                        })
                    }
                </div>
            </div>
        )
    }
    jump(path){
        this.props.history.push(path);
        this.setState({path})
    }
    componentDidMount(){
        this.setState({path:this.props.location.pathname})
    }
    componentDidUpdate(props,state){
        if(state.path!==this.props.location.pathname){
            this.setState({path:this.props.location.pathname})
        } 
    }
}

export default islogin(index);