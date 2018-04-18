import * as React from 'react';

function QueueList({ queue }) {
  console.log(queue); // tslint:disable-line
  return (
    <ol>
      {queue.map(printTitle)}
    </ol>
  );
}

function printTitle(title){
  return (<li>{title.name ? title.name : 'Niespodzianka'}</li>);
}

export default QueueList;
