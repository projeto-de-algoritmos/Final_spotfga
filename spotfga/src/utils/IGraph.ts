import IUser from './IUser';

export default interface IGraph {
  nodes: IUser[];
  edges: Map<number, IUser[]>;
}
