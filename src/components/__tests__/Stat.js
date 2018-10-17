import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Stat from '../Stat';
import { fakeData } from '../__mocks__/fakeData'

describe('Stat', () => {
  it('Matches snapshot', () => {
    const wrapped = shallow(<Stat label="Height" value="183"/>);
    expect(wrapped).toMatchSnapshot();
  })
});
