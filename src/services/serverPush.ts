import * as io from 'socket.io-client';
import youtubeQueue from './queue/youtubeQueue';
import synthesis from './synthesis';

interface IIcomingMsg {
  action: string,
  song?: ISong,
}
interface ISong {
  _id?: string;
  name: string;
  youtubeId: string;
  trimStartSeconds: (number | null);
  trimEndSeconds: (number | null);
  timesPlayed: number;
}

interface ISayMessage {
  text: string;
}

let socket;

function handleIncomingMsg(msg: IIcomingMsg) {
  console.log('incoming message'); // tslint:disable-line
  console.log(msg); // tslint:disable-line
  if (msg.action === 'ADD' && msg.song) {
    youtubeQueue.add({ id: msg.song.youtubeId});
  }
}

function handleSay(message: ISayMessage) {
  synthesis.speechApiSay(message.text);
}

function initSocket() {
  socket = io();
  socket.on('connect', ()=> console.log('SOCKET CONNECTED!')); // tslint:disable-line
  socket.on('queue', handleIncomingMsg);
  socket.on('say', handleSay);
  return socket;
}

export default {
  initSocket,
};
