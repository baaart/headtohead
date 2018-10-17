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
      <Stat label="Wins" value={props.data.last} formatter={v => v.filter(x => x===1).length} />
      <Stat label="Loses" value={props.data.last} formatter={v => v.filter(x => x===0).length} />
      <Stat label="Height" value={props.data.height} formatter={v => `${v}cm`} />
      <Stat label="Weight" value={props.data.weight} formatter={v => `${v/1000}kg`}/>
    </StatWrapper>
  );
}

Stats.propTypes = {
  data: PropTypes.object.isRequired
};

export default Stats;
