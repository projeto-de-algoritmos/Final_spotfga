/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext } from 'react';

import IGraph from '../utils/IGraph';

interface CtxProps {
  graph: IGraph;
  setGraph: any;
  musics: string[];
  setMusics: any;
}

export const UserCtx = createContext<CtxProps>({
  graph: {} as IGraph,
  setGraph: null,
  musics: [],
  setMusics: null,
});
