import * as React from 'react';
import youtubePlayer from '../../services/youtubePlayer';

class NowPlaying extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: '',
    }
    youtubePlayer.setOnVideoChangeListener((video) => {
      this.setState({ nowPlaying: video.name });
    });
  }

  render() {
    return (
      <div>Name: {this.state.nowPlaying}</div>
    )
  }

}

function printTitle(title){
  return (<div>Title</div>);
}

export default NowPlaying;
