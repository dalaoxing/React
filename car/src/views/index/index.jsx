import React,{Component} from 'react';
import RouterView from '@/Router/routerView';

class Index extends Component{
    state={
        list:[
            {
                title:'首页',
                path:'/index/home'
            },{
                title:'找车',
                path:'/index/bind'
            },{
                title:'论坛',
                path:'/index/forum'
            },{
                title:'二手车',
                path:'/index/twocar'
            }
        ],
        flag:false,
        sticky:false
    }
    butTo(){
        this.setState({flag:!this.state.flag})
    }
    render(){
        let {routes}=this.props;
        let {list,flag,sticky}=this.state;
        return <div className="index" onScroll={this.toScroll.bind(this)}>
            <div className="head">
                <p>汽车之家</p>
                <input type="text" onClick={()=>{this.props.history.push('/search')}}/>
                <p onClick={()=>{this.props.history.push('/my')}}>我的</p>
            </div>
            <div className={`nav ${sticky?'sticky':''}`}>
                {
                    list.map((it,inx)=>{
                        return <p key={inx} onClick={()=>{this.props.history.push(it.path)}}>{it.title}</p>
                    })
                }
                <svg onClick={this.butTo.bind(this)} t="1571143803742" className={`icon ${flag?'top':''}`} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3296" width="30" height="30"><path d="M512 685.248l-278.624-278.624 45.248-45.248L512 594.752l233.376-233.376 45.248 45.248z" fill="#fff" p-id="3297"></path></svg>
                <div className={`navbut ${!flag?'none':''}`}>
                    <p>更多</p>
                    <p>关注</p>
                    <p>详细</p>
                </div>
            </div>
            <RouterView routes={routes}/>
        </div>
    }
    toScroll(e){
        if(e.target.scrollTop>44){
            this.setState({sticky:true})
        }else{
            this.setState({sticky:false})
        }
    }
}

export default Index;