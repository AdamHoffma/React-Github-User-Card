import React from 'react';
import Card from './components/Card.js'
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  

  fetchUser = () => {
    axios.get('https://api.github.com/users/AdamHoffma')
    .then(response => {
      this.setState({data: response.data})
  })
  .catch(error => {
    console.log("error", error)
  })
}

  componentDidMount () {
    this.fetchUser()    
  }
  render() {    
    return (
      <div className="App">      
        <h1>GitHub User Cards</h1>    
            <Card data={this.state.data}/>

      </div>
    )
  }
      
}

export default App;
