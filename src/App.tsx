import * as React from 'react';

import Queue from './components/Queue/Queue';
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer';

class App extends React.Component {
  public render() {
    return (
      <div className="view">
        <div className="header-container">
          <div className="logo-container">
            <p className="logo-text">LebkuchenFM</p>
          </div>
        </div>
        <div className="status-container">
          <div className="status">
            <span className="dimmed">now playing </span>Progidy - VooDoo People <span className="dimmed">now playing </span>
          </div>
        </div>
        <YoutubePlayer />
        <Queue />

        <div className="footer-container">
          <div className="footer">
            <span>&copy; alright</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
