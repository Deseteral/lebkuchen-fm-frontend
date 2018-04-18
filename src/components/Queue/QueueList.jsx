import * as React from 'react';

function QueueList({ queue }) {
  console.log(queue); // tslint:disable-line
  return (
    <div className="queue-container">
      <ul className="queue">
        {queue.map(printTitle)}
      </ul>
    </div>
  );
}

function printTitle(title){
  return (<li className="queue-item">{title.name ? title.name : 'Niespodzianka'}</li>);
}

export default QueueList;
