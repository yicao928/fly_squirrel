import React from 'react';
import './Home.css';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            msg:'11111'
        }
    }

    render(){
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <p>asdasdasd</p>
            </div>
        );
    }
}

export default Home;