import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import CardHeader from '../CardHeader';
import { fakeData } from '../__mocks__/fakeData';

const player = fakeData.players[0];

describe('CardHeader', () => {
  it('Matches snapshot', () => {
    const wrapped = shallow(<CardHeader title={player.firstname} url={player.country.picture} />);
    expect(wrapped).toMatchSnapshot();
  })
});
