import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CmdInput from './CmdInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CmdInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
