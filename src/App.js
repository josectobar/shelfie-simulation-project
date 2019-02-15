import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

const apiUrl = "/api/inventory"

class App extends Component {
  constructor(){
    super()
    this.state ={
      inventory:[]
    }
  }

  componentDidMount(){
    axios.get(apiUrl).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form />
        <Header />
      </div>
    )
  }
}

export default App;
