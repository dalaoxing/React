import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
    state={
        ipt:''
    }
    render() {
        let {ipt} = this.state;
        return (
            <div>
                <input type="text" value={ipt} onChange={this.tochange.bind(this)}/>
                <button onClick={this.props.to.bind(this)}>改变</button>
                {this.props.a}
            </div>
        )
    }
    tochange(e){
        this.setState({ipt:e.target.value})
    }
}

function a(state){
    return {
        ...state
    }
}

function b(dispath){
    return {
        to(){
            let {ipt}=this.state;
            dispath((dispath)=>{
                console.log("开始");
                dispath({type:'all',a:ipt})
            })
        }
    }
}

Home=connect(a,b)(Home)

export default Home;
