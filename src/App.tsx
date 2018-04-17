import * as React from 'react';
import './App.css';
import CmdInput from './components/CmdInput/CmdInput';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hipchat command tester</h1>
        </header>
        <CmdInput />
      </div>
    );
  }
}

export default App;
