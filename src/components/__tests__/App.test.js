import React from 'react';
import { mount, shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import moxios from 'moxios';

import App from '../App';
import PlayerList from '../PlayerList';
import Player from '../Player';
import { fakeData } from '../__mocks__/fakeData';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://eurosportdigital.github.io/eurosport-web-developer-recruitment/headtohead.json', {
    status: 200,
    response: fakeData 
  });

});

afterEach(() => {
  moxios.uninstall();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('can fetch a data and display players', (done) => {
  const wrapped = mount(<App />)

  moxios.wait(() => {
    wrapped.update();
    expect()
    expect(wrapped.find(Player).length).toEqual(2);
    expect(wrapped.find(PlayerList).length).toEqual(1);
    done();
    wrapped.unmount();
  });
});


