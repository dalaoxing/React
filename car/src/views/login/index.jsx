import React,{Component} from 'react';

class Login extends Component{
    state={
        user:'',
        pwd:''
    }
    render(){
        let {user,pwd}=this.state;
        return <div className="login">
            <p><input type="text" onChange={this.toChange.bind(this)} value={user} name='user' placeholder="请输入用户名"/></p>
            <p><input type="text" onChange={this.toChange.bind(this)} value={pwd} name='pwd' placeholder="请输入密码"/></p>
            <button onClick={this.toUser.bind(this)}>登陆</button>
        </div>
    }
    toChange(e){
        let keys=e.target.name;
        this.setState({[keys]:e.target.value});
    }
    toUser(){
        let {user,pwd}=this.state;
        if(user==='jinzhou'&&pwd==='123456'){
            localStorage.user='jinzhou';
            this.props.history.go(-1);
        }else{
            alert('用户名或密码错误');
        }
    }
}

export default Login;