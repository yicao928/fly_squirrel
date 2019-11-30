import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111',
            username:'',
            password:''
        };
    }
    userchange=(e)=>{
        let val = this.refs.username.value;
        this.setState(
            {
                username:val
            }
        )
    }
    passwordcange=(e)=>{
        let val = this.refs.password.value;
        this.setState(
            {
                password:parseInt(val)
            }
        )
    }
    checkuser=()=>{
        if(this.state.username==='admin' && this.state.password===111){
            alert("success!");
        }else{
            alert("username or password wrong!");
        }

    }
    render(){
        return(
            <div>
                <a className='Login'>
                username
                <input ref="username" onChange={this.userchange}/> 
                <br/><br/>
                <a className='password'/>
                password
                <input ref="password" onChange={this.passwordcange}/>
                <br/><br/>  
                <button onClick={this.checkuser}>login</button>
                </a>
            </div>
        );
    }
}

export default Login;