import React, { Component } from 'react';
import Heads from './index.module.css';
import {withRouter} from 'react-router-dom';

class Head extends Component {
    render() {
        let {back,title,right,path}=this.props;
        return (
            <div className={Heads.head}>
                {
                    !back?<p></p>:<p onClick={this.toBack.bind(this)}><svg t="1571311830281" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3869" width="24" height="24"><path d="M538.288 198.624l-11.312-11.312a16 16 0 0 0-22.64 0L187.312 504.336a16 16 0 0 0 0 22.64L504.336 844a16 16 0 0 0 22.64 0l11.312-11.312a16 16 0 0 0 0-22.624l-294.4-294.4 294.4-294.4a16 16 0 0 0 0-22.64z" p-id="3870"></path></svg></p>
                }
                <h3>{title}</h3>
                <p onClick={path&&this.jump.bind(this,path)}>{right}</p>
            </div>
        )
    }
    toBack(){
        this.props.history.go(-1)
    }
    jump(path){
        this.props.history.push(path)
    }
}

export default withRouter(Head);