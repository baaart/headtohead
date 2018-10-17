import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Spin, message  } from 'antd';

import './App.css';
import PlayerList from './PlayerList';

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`

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
      .catch(function (error) {
         message.error("Can't fetch the data"); 
      })
  }

  render() {
    return (
      <Wrapper> 
          <h1>HeadToHead</h1>
          { this.state.players ? <PlayerList players={this.state.players}/> : <Spin /> }
      </Wrapper>
    );
  }
}

export default App;
