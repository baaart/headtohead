import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import PlayerList from './PlayerList';

class App extends Component {
  state = {
    players: null
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then(res => {
        const players = res.data.players;
        this.setState({ players })
      })
  }

  render() {
    return (
      <div>
        <div>HeadToHead</div>
        { this.state.players ? <PlayerList players={this.state.players}/> : <div>Loading</div>}
      </div>
    );
  }
}

export default App;
