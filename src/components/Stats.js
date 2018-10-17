import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Stat from './Stat';

const StatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
  width: 100%;
`

function Stats({...props}) {
  return (
    <StatWrapper>
      <h3>Stats</h3>
      <Stat label="Rank" value={props.data.rank} />
      <Stat label="Points" value={props.data.points} />
      <Stat label="Wins" value={props.data.last.filter(x => x===1).length} />
      <Stat label="Loses" value={props.data.last.filter(x => x===0).length} />
      <Stat label="Height" value={props.data.height} />
      <Stat label="Weight" value={props.data.weight}/>
    </StatWrapper>
  );
}

Stats.defaultProps = {};

Stats.propTypes = {};

export default Stats;
