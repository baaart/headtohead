import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';

import App from '../App';
import PlayerList from '../PlayerList'
import Player from '../Player'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
