import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import ProfilPerson from './component/Profil/ProfilPerson';
import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './App.css'


export class App extends Component {
  state={
    isShow: false
  }
  HandlShow= () =>{
   this.setState({ isShow:! this.state.isShow  });
  }

  render() {
    return (
      <div className='App'>
       <Header />
       <div style={{marginTop:"50px", textAlign:"center"}}>
       <Button onClick={this.HandlShow}>{this.state.isShow? "Hide" : "Show"} </Button></div>
       {this.state.isShow===true? <ProfilPerson/> : null}
       
     </div>
    )
  }
}

export default App

