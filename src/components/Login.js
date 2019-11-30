import React from 'react';
import './Login.css';


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111',
            username:'',
            password:'',
            login:false
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
    checkuser=(e)=>{
        if(this.state.username==='admin' && this.state.password===111){
            alert("login success");
            this.props.history.push({pathname:'/home'});
        }else{
            alert("username or password wrong!");
        }

    }
    render(){
        return(
            <div>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <a
           className="App-link"
           href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
           >
            Fly Squirral
          </a>
        </header>
                <b className='Login'/>
                username
                <input ref="username" onChange={this.userchange}/> 
                <br/><br/>
                <a className='password'/>
                password
                <input ref="password" onChange={this.passwordcange}/>
                <br/><br/>  
                <button onClick={this.checkuser}>login</button>
                
            </div>
        );
    }
}


export default Login;