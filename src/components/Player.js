import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd'
import styled from 'styled-components';

import Stats from './Stats'
import CardHeader from './CardHeader';

const PlayerWrapper = styled.div`
  margin: 10px;
` 
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`
const Avatar = styled.img`
  width: 50%;
  height: 50%;
`

function Player({...props}) {
  return (
    <PlayerWrapper>
      <Card 
        title={<CardHeader title={`${props.data.firstname} ${props.data.lastname}`} 
                           url={props.data.country.picture} />}
      >
        <CardContent>
          <Avatar src={props.data.picture} />
          <Stats data={props.data.data} />
        </CardContent>
      </Card>
    </PlayerWrapper>
  );
}

Player.propTypes = {
  data: PropTypes.object.isRequired
};

export default Player;
