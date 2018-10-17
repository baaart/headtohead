import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
  margin-bottom: 0;
  padding: 0;
`
const Label = styled.p`
  text-align: left;
  font-weight: 600;
  position: relative;
  min-width: 80px;
  margin-bottom: 0;

  &:after {
    content: ':';
    position: absolute;
    right: 0;
  }
`
const Value = styled.p`
  font-weight: 400;
  margin: 0;
  margin-left: 1em;
  text-align: left;
`

function Stat({...props}) {
  return (
    <Wrapper >
      <Label>{props.label}</Label>
      <Value>{props.value}</Value>
    </Wrapper>
   );
}

export default Stat;
