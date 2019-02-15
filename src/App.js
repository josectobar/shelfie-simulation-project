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
      inventory:[],
      currentId: null
    }
  }

  componentDidMount(){
    this.getInventory()
  }

  getInventory = () => {
    axios.get(apiUrl).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  editProduct= (id) => {
      this.setState({
      currentId: id
    })
  }


  render() {
    return (
      <div className="App">
        <Dashboard editProduct={this.editProduct} getInventory = { this.getInventory }  inventory={ this.state.inventory }/>
        <Form currentId={this.state.currentId} getInventory={ this.getInventory } />
        <Header />
      </div>
    )
  }
}

export default App;
