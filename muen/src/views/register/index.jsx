import React, { Component } from 'react';
import {Register} from '@/api';
import { Toast} from 'antd-mobile';

export default class login extends Component {
    state={
        user:'',
        pwd:'',
        name:''
    }
    render() {
        let {user,pwd,name}=this.state;
        return (
            <div className="register">
                <h4>欢迎加入沐恩之家</h4>
                <p><input type="text" placeholder="请输入用户名" value={user} name="user" onChange={this.changeName.bind(this)}/></p>
                <p><input type="text" placeholder="请输入密码" value={pwd} name="pwd" onChange={this.changeName.bind(this)}/></p>
                <p><input type="text" placeholder="请输入真实姓名" value={name} name="name" onChange={this.changeName.bind(this)}/></p>
                <button onClick={this.toRegister.bind(this)}>注册</button>
            </div>
        )
    }
    changeName(e){
        let keys=e.target.name;
        let val=e.target.value;
        this.setState({[keys]:val});       
    }
    async toRegister(){
        let {user,pwd,name}=this.state;
        try{
            let res = await Register({userName:user,password:pwd,realName:name});
            console.log(res);
            if(res.data.code===1){
                this.props.history.push('/login');
            }
        }catch(err){
            Toast.info(err.response.data.message, 2);
        }
        
    }
}
