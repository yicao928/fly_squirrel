import React from 'react';
import './Login.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111'
        }
    }

    render(){
        return(
            <div>
                <a className='Title'>
                    Login
                </a>
            </div>
        );
    }
}

export default Login;