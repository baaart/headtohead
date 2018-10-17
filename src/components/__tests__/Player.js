import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Player from '../Player';
import { fakeData } from '../__mocks__/fakeData'

describe('Player', () => {
  it('Matches snapshot', () => {
    const wrapped = shallow(<Player data={fakeData.players[0]} />);
    expect(wrapped).toMatchSnapshot();
  })
});
