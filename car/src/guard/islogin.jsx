import React, { Component } from 'react';

function islogin(Com){
    return class extends Component {
        state={
            isShow:false
        }
        render() {
            return (
                <>
                    {
                        this.state.isShow?<Com {...this.props}/>:null
                    }
                </>
            )
        }
        componentDidMount(){
            if(localStorage.userId){
                this.setState({isShow:true});
            }else{
                this.props.history.push('/login')
            }
        }
    }
}

export default islogin;