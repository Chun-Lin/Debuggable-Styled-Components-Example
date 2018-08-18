import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Content from './components/content/Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Content bold/>
      </div>
    )
  }
}

export default App
