import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { styled } from 'styled-components';

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

PlayerList.defaultProps = {};

PlayerList.propTypes = {};

export default PlayerList;
