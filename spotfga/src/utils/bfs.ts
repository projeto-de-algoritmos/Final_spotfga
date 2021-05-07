import graph from './graph';
import IUser from './IUser';

const { adjListUsers, userNodes } = graph;

const bfs = (start: IUser): void => {
  const visited = new Set();

  const queue = [start];

  while (queue.length > 0) {
    const user = queue.shift();

    const connections = adjListUsers.get(user?.id);

    connections.forEach((connection: IUser) => {
      if (!visited.has(connection)) {
        visited.add(connection);
        queue.push(connection);
        if (connection.id === 0) {
          console.log('BFS found Gabriel');
        }
      }
    });
  }
};

bfs(userNodes[1]);

export default bfs;
