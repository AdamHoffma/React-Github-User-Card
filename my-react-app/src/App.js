import React from 'react';
import CardList from './components/CardList.js'
import './App.css';
import axios from 'axios'


class App extends React.Component {
  constructor() {
    super()
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
        <h2>coming soon</h2>    
            <CardList data={this.state.data}/>

      </div>
    )
  }
      
}

export default App;
