import { createContext } from 'react';

import IGraph from '../utils/IGraph';

interface CtxProps {
  graph: IGraph;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setGraph: any;
}

export const UserCtx = createContext<CtxProps>({
  graph: {} as IGraph,
  setGraph: null,
});
