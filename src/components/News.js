import React from 'react';
import './Home.css';

class News extends React.Component{
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
                <p>This is the post page</p>
            </div>
        );
    }
}

export default News;