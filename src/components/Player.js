import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd'
import styled from 'styled-components';

import Stat from './Stat'
import CardHeader from './CardHeader';

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`
const Stats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  width: 100%;
`
const Avatar = styled.img`
  width: 50%;
  height: 50%;
`

function Player({...props}) {
  return (
    <Card title={<CardHeader />} >
        <CardContent>
        <Avatar src="https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg" />
          <Stats>
            <h3>Stats</h3>
            <Stat label="Age" value="32" />
            <Stat label="Height" value="178" />
            <Stat label="Weight" value="73" />
            <Stat label="Rank" value="21" />
            <Stat label="Points" value="432" />
            <Stat label="Wins" value={3} />
            <Stat label="Loses" value={4} />
          </Stats>
      </CardContent>
    </Card>
  );
}

Player.defaultProps = {};

Player.propTypes = {};

export default Player;
