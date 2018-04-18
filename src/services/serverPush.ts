import * as io from 'socket.io-client';

let socket;

function initSocket(url='http://localhost:8000') {
  socket = io(url);
  socket.on('connect', ()=> console.log('SOCKET CONNECTED!')); // tslint:disable-line
  socket.on('queue', (song: any) => console.log(song)); // tslint:disable-line
  return socket;
}

export default {
  initSocket,
};
