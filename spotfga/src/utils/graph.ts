import IUser from './IUser';

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
userNodes[0].musics.push('Think Of My Affection');
userNodes[1].musics.push('Stars');
userNodes[1].musics.push('Think Of My Affection');
userNodes[0].musics.push('Remember My Tomorrow');
userNodes[0].musics.sort();
userNodes[1].musics.sort();
const graph = {
  adjListUsers,
  userNodes,
};

export default graph;
