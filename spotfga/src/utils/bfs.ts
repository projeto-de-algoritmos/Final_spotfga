import IGraph from './IGraph';
import IUser from './IUser';

const bfs = (start: IUser, graph: IGraph): Array<number> => {
  const visited = new Array<number>();

  const { edges } = graph;

  const queue = [start];

  while (queue.length > 0) {
    const user = queue.shift();
    let connections;
    if (user) connections = edges.get(user.id);

    connections?.forEach((connection: IUser) => {
      if (!visited.includes(connection.id) && connection.id !== start.id) {
        visited.push(connection.id);
        queue.push(connection);
      }
    });
  }

  return visited;
};

export default bfs;
