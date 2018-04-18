import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import * as React from 'react';
import CmdFormSection from './components/CmdForm/CmdFormSection';
import Header from './components/Header/Header';
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer';

interface IAppState {
  displaySendMsg: boolean
}

class App extends React.Component {
  public state: IAppState;

  constructor(props: object) {
    super(props);
    this.state = {
      displaySendMsg: false,
    };
    this.toggleSendMsgForm = this.toggleSendMsgForm.bind(this);
  }

  public render() {
    return (
      <div>
        <Header title="" />
        <YoutubePlayer />
        <div>
          <div className="section container">
            <button className="button" onClick={this.toggleSendMsgForm}>Toggle message form</button>
          </div>
          { this.state.displaySendMsg ? <CmdFormSection /> : null }
        </div>
      </div>
    );
  }

  private toggleSendMsgForm() {
    this.setState({ displaySendMsg: !this.state.displaySendMsg });
  }
}

export default App;
