import React, { Component } from 'react';
import Axios from 'axios';
import '@/mock';

export default class Home extends Component {
    state={
        list:[]
    }
    render() {
        let {list}=this.state;
        return (
            <div className="home">
                {
                    list&&list.map((it,inx)=>{
                        return <dl key={inx}>
                            <dt>
                                <img src={it.pic} alt="111"/>
                            </dt>
                            <dd>
                                <h4>{it.cname}</h4>
                                <p>{it.content}</p>
                            </dd>
                        </dl>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        Axios.get('/data/home').then(res=>{          
            this.setState({list:res.data.list})
        })
    }
}
