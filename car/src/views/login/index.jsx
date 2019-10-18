import React, { Component } from 'react';
import {Login} from '@/api';

export default class login extends Component {
    state={
        user:'',
        pwd:''
    }
    render() {
        let {user,pwd}=this.state;
        return (
            <div className="login">
                <h4>欢迎来到沐恩之家</h4>
                <p><input type="text" placeholder="请输入用户名" value={user} name="user" onChange={this.changeName.bind(this)}/></p>
                <p><input type="text" placeholder="请输入密码" value={pwd} name="pwd" onChange={this.changeName.bind(this)}/></p>
                <button onClick={this.toLogin.bind(this)}>登陆</button>
                <button onClick={this.toRegister.bind(this)}>注册</button>
            </div>
        )
    }
    changeName(e){
        let keys=e.target.name;
        let val=e.target.value;
        this.setState({[keys]:val});       
    }
    async toLogin(){
        let {user,pwd}=this.state;
        try{
            let res = await Login({userName:user,password:pwd});
            if(res.data.code===1){
                localStorage.token=res.data.token;
                localStorage.userId=res.data.userId;
                this.props.history.go(-1);
            }
        }catch(err){
            console.log(err.response); 
        }
        
    }
    toRegister(){
        this.props.history.push('/register')
    }
}