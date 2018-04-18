let queue = [];

const subscribers = {
  added: new Set(),
};

function clear() {
  queue.length = 0;
}

function pop() {
  return queue.pop();
}

function add(video) {
  queue.push(video);
  if (queue.length === 1) {
    subscribers.added.forEach((callback)=> callback());
  }
  console.log(queue); // tslint:disable-line
}

function setOnAddListener(callback) {
  subscribers.added.add(callback);
}

export default {
  add,
  clear,
  pop,
  setOnAddListener,
};
