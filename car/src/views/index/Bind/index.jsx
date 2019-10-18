import React, { Component } from 'react';
import Axios from 'axios';
import '@/mock';

export default class Forum extends Component {
    state={
        obj:{}
    }
    render() {
        let {obj}=this.state;
        return (
            <div className="forum">
                <div className="left">
                    {
                        Object.keys(obj).map((it,inx)=>{
                            return <div key={inx} ref={'tit_'+it}>
                                <h4>{it}</h4>
                                {
                                    obj[it].map((item,index)=>{
                                        return <dl key={index}>
                                            <dt>
                                                <img src={item.CoverPhoto} alt="111"/>
                                            </dt>
                                            <dd>
                                            {item.Name}
                                            </dd>
                                        </dl>
                                    })
                                }
                            </div>
                        })
                    }
                </div>
                <div className="right">
                    {
                        Object.keys(obj).map((it,inx)=>{
                            return <p key={inx} onClick={this.toTop.bind(this,it)}>{it}</p>
                        })
                    }
                </div>
            </div>
        )
    }
    toTop(it){
        document.querySelector('.index').scrollTop=this.refs['tit_'+it].offsetTop-44;
    }
    componentDidMount(){
        Axios.get('/data/city').then(res=>{
            this.setState({obj:res.data})
        })
    }
}
