import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the player list', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(PlayerList).length).toEqual(1);
})
