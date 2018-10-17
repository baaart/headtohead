import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Stats from '../Stats';
import { fakeData } from '../__mocks__/fakeData'

describe('Stats', () => {
  it('Matches snapshot', () => {
    const wrapped = shallow(<Stats data={fakeData.players[0].data} />);
    expect(wrapped).toMatchSnapshot();
  })
});
