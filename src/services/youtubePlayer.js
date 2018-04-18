import youtubeQueue from './queue/youtubeQueue';
import * as YouTubePlayer from 'youtube-player';

const YT_ENDED = 0;
const YT_CUED = 5;

let player = null;

function playNextVideo() {
  const youtubeVideo = youtubeQueue.pop();
  if (youtubeVideo) {
    playYoutubeVideo(youtubeVideo)
  }
}

function playYoutubeVideo(youtubeVideo) {
  player.loadVideoById(youtubeVideo.id);
  player.playVideo();
}

function initPlayer(domId) {
  player = YouTubePlayer('yt-player');
  player.on('stateChange', (event) => {
    if (event.data === YT_ENDED) {
      playNextVideo();
    }
  });
  youtubeQueue.setOnAddListener(() => {
    player.getPlayerState().then((playerState)=> {
      if ([YT_ENDED, YT_CUED].indexOf(playerState) >= 0) {
        playNextVideo();
      }
    });
  })
}

function changeVolume(val) {
  return player.setVolume(val);
}

export default {
  changeVolume,
  initPlayer,
  playNextVideo,
  playYoutubeVideo,
}
