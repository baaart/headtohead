import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Flag = styled.img`
  height: 50px;
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

function CardHeader({...props}) {
  return (
    <Wrapper>
      <h3>{props.title}</h3>
      <Flag src={props.url}/>
    </Wrapper>
  );
}

CardHeader.propTypes = {};

export default CardHeader;
