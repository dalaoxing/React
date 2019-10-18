import React, { Component } from 'react';
import Head from '@/components/Head';
import {allVote} from '@/api';

export default class allvote extends Component {
    state={
        List:[

        ],
        newList:[

        ],
        index:0,
        tap:['全部','已结束','正在进行']
    }
    render() {
        let {newList,tap,index}=this.state;
        return (
            <div className="allvote">
                <Head back={true} title="所有投票" right="发起投票" path="/tovote"/>
                <div className="tap">
                    {
                        tap.map((it,inx)=>{
                            return <p onClick={this.toTap.bind(this,inx)} key={inx} className={index===inx?'ave':''}>{it}</p>
                        })
                    }
                </div>
                <div className="list">
                    {
                        newList.map((it,inx)=>{
                            return <dl key={inx}>
                                <dt><img src={require('@/static/img/timg.jpg')} alt=""/></dt>
                                <dd>
                                    <h4>{it.title}</h4>
                                    <p><span>截止到{it.endTime}</span><span>{it.isSingle===0?'单选':'多选'}</span></p>
                                </dd>
                            </dl>
                        })
                    }
                </div>
            </div>
        )
    }
    async componentDidMount(){
        let res = await allVote();
        this.setState({List:res.data,newList:res.data}) 
    }
    toTap(index){
        let {List,newList}=this.state;
        if(index===1){
            newList=List.filter(it=>new Date()*1>new Date(it.endTime))
        }else if(index===2){
            newList=List.filter(it=>new Date()*1<new Date(it.endTime))
        }
        this.setState({index,newList});
    }
}
