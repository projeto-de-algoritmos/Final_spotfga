interface IUser {
  id: number;
  nome: string;
  musics: string[];
}

const userNodes: IUser[] = [];
const adjListUsers = new Map();

const addUser = (nome: string): void => {
  const id = userNodes.length;
  const musics: string[] = [];
  const user: IUser = {
    id,
    nome,
    musics,
  };
  userNodes.push(user);
};

const addNode = (user: IUser): void => {
  adjListUsers.set(user.id, []);
};

const addEdge = (origin: IUser, destination: IUser): void => {
  adjListUsers.get(origin.id).push(destination);
  adjListUsers.get(destination.id).push(origin);
};

addUser('Murilo');
addUser('Gabriel');
userNodes.forEach(addNode);
addEdge(userNodes[0], userNodes[1]);
const graph = {
  adjListUsers,
  userNodes,
};

export default graph;
