import * as React from "react";
import * as YouTubePlayer from 'youtube-player';
import  youtubeQueue from '../../services/queue/youtubeQueue';


class YoutubePlayer extends React.Component {
  private player: any;

  constructor(props: object) {
    super(props);
  }

  public componentDidMount() {
    this.player = YouTubePlayer('yt-player');
    youtubeQueue.setOnAddListener(()=>{
      this.playNextVideo();
    })
  }

  public playNextVideo() {
    const youtubeVideo = youtubeQueue.pop();
    if (youtubeVideo) {
      this.playYoutubeVideo(youtubeVideo)
    }
  }

  public playYoutubeVideo(youtubeVideo) {
    this.player.loadVideoById(youtubeVideo.id);
    this.player.playVideo();
  }

  public render() {
    return(
      <div className="section">
        <div id="yt-player" />
      </div>
    );
  }
}

export default YoutubePlayer;
