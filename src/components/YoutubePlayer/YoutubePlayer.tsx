import * as React from "react";
import * as YouTubePlayer from 'youtube-player';
import  youtubeQueue from '../../services/queue/youtubeQueue';

const YT_ENDED = 0;
const YT_CUED = 5;

class YoutubePlayer extends React.Component {
  private player: any;

  constructor(props: object) {
    super(props);
  }

  public componentDidMount() {
    this.player = YouTubePlayer('yt-player');
    this.initPlayerListener();
    youtubeQueue.setOnAddListener(() => {
      this.player.getPlayerState().then((playerState)=> {
        if ([YT_ENDED, YT_CUED].indexOf(playerState) >= 0) {
          this.playNextVideo();
        }
      });
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

  private initPlayerListener() {
    this.player.on('stateChange', (event) => {
      if (event.data === YT_ENDED) {
        this.playNextVideo();
      }
  });
  }
}

export default YoutubePlayer;
