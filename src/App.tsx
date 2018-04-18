import 'bulma/css/bulma.css';
import 'bulma/css/bulma.css';
import * as React from 'react';
import Header from './components/Header/Header';
import Queue from './components/Queue/Queue';
import YoutubePlayer from './components/YoutubePlayer/YoutubePlayer';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header title="" />
        <YoutubePlayer />
        <Queue />
      </div>
    );
  }
}

export default App;
