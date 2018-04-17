import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import * as React from 'react';
import CmdForm from './components/CmdForm/CmdForm';

class App extends React.Component {
  public render() {
    return (
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                HipChat Command Tester
              </h1>
              <h2 className="subtitle">
                LebkuchenFM
              </h2>
              <CmdForm />
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <h1 className="title">
              Example commands
            </h1>
            <p className="subtitle">
              #TODO
            </p>
          </div>
        </section>
      </div>

    );
  }
}

export default App;
