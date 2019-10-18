import React, { Component } from 'react'

function fn(Com){
    return class before extends Component {
        state={
            flag:false
        }
        render() {
            let {flag}=this.state;
            return (
                <>
                    {
                        flag?<Com {...this.props}/>:null
                    }
                </>
            )
        }
        componentDidMount(){
            if(localStorage.user){
                this.setState({flag:true})
            }else{
                this.props.history.push('/login')
            }
        }
    }
}

export default fn;