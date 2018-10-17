import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';

import Player from './Player';

function PlayerList(props) {
  return (
    <Row gutter={16} type="flex" justify="center">
      {props.players.map((p, i) => 
      <Player key={i} data={p} />
      )}
    </Row>
  );
}

PlayerList.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default PlayerList;
