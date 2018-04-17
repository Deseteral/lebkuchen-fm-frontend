import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import * as React from 'react';
import CmdInput from './components/CmdInput/CmdInput';

class App extends React.Component {
  public render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
            <CmdInput />
          </p>
        </div>
      </section>
    );
  }
}

export default App;
