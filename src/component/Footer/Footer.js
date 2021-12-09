
import React, { Component } from 'react'
import './Footer.css'

export class Footer extends Component {
    state ={
        count:0

    }
    increment= () =>{
this.setState({ count: this.state.count + 1 });
    }

    componentDidMount(){
        setInterval(() => {
            this.increment()
        }, 1000);
        
    }
    render() {
        return (
            <div className='foot'>
                 <p>
                © 2021 Instagram par Meta</p>
               <h3>{this.state.count} </h3> 
            </div>
        )
    }
}

export default Footer
