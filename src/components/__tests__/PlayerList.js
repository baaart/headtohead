import React from 'react';
import { shallow } from 'enzyme';

import PlayerList from '../PlayerList'
import Player from '../Player';

const players = [
  {
    firstname: 'Frank',
    lastname: 'Sinatra',
  },
  {
    firstname: 'Lue',
    lastname: 'Bega'
  },
]

it('renders Players components', () => {
  const wrapped = shallow(<PlayerList players={players}/>);
  expect(wrapped.find(Player).length).toEqual(2);
});
