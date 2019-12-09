import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Application', () => {
  it('renders without crashing 2', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})


