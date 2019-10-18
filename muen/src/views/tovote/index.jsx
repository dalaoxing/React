import React, { Component } from 'react';
import Head from '@/components/Head';
import {newvote} from '@/api';
import { DatePicker, List } from 'antd-mobile';
import { isStringLiteral } from '@babel/types';

export default class tovote extends Component {
    state={
        title:'',//投票标题
        info:'',//详情信息
        chooseList:[],//昵称
        txt:'',//昵称暂存
        anonymity:'0',//是否匿名 0:匿名 1:不匿名
        isSingle:'0',//是否单选 0 单选 1:多选
        endTime:''//结束时间
    }
    render() {
        let {title,info,chooseList,anonymity,isSingle,endTime,txt}=this.state;
        return (
            <div className="tovote">
                <Head back={true} title="发起投票"/>
                <div className="box">
                    <p><span>标题:</span><input type="text" name='title' value={title} onChange={this.hadlerChange.bind(this)}/></p>
                    <p className="textarea"><span>描述:</span><textarea  name='info' value={info} onChange={this.hadlerChange.bind(this)} cols="30" rows="5" ></textarea></p>
                    {
                        chooseList.map((it,inx)=>{
                            return <div key={inx} className="its"><p>{it}</p><span onClick={this.del.bind(this,inx)}>删除</span></div>
                        })
                    }
                    <p  className="its"><input type="text" placeholder="请输入选项内容" name='txt' value={txt} onChange={this.hadlerChange.bind(this)}/><span onClick={this.add.bind(this)}>添加</span></p>
                    <p><span>请选择单选多选:</span>
                        <select name='anonymity' value={anonymity} onChange={this.hadlerChange.bind(this)}>
                            <option value="0">匿名</option>
                            <option value="1">不匿名</option>
                        </select>
                    </p>
                    <p><span>请选择是否匿名:</span>
                        <select name='isSingle' value={isSingle} onChange={this.hadlerChange.bind(this)}>
                            <option value="0">单选</option>
                            <option value="1">多选</option>
                        </select>
                    </p>
                    <p>截止日期:</p>
                    <DatePicker
                    value={endTime}
                    onChange={endTime => this.setState({ endTime })}
                    >
                        <List.Item arrow="horizontal">请选择截止时间</List.Item>
                    </DatePicker>
                    <button onClick={this.fabu.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
    hadlerChange(e){
        let name=e.target.name;
        let val=e.target.value;
        this.setState({[name]:val})
    }
    async fabu(){
        let {title,info,chooseList,anonymity,isSingle,endTime}=this.state;
        try{
            let res = await newvote({title,userId:window.localStorage.userId*1,info,chooseList,anonymity:anonymity*1,isSingle:isSingle*1,startTime:new Date(),endTime})
            if(res.data.code===1){
                this.props.history.push('/allvote')
            }
        }catch(err){
            console.log(err.response); 
        }
        
    }
    del(inx){
        let {chooseList}=this.state;
        chooseList.splice(inx,1);
        this.setState({chooseList})
    }
    add(){
        let {chooseList,txt}=this.state;
        chooseList.push(txt);
        this.setState({chooseList,txt:''});
    }
}
