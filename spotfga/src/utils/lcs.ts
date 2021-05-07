import graph from './graph';

const lcs = (
  arrayLeft: string[],
  arrayRight: string[],
  sizeOne: number,
  sizeTwo: number,
  memoization: number[][],
): number => {
  if (sizeOne === 0 || sizeTwo === 0) {
    return 0;
  }
  if (memoization[sizeOne - 1][sizeTwo - 1] !== -1) {
    return memoization[sizeOne - 1][sizeTwo - 1];
  }
  if (arrayLeft[sizeOne - 1] === arrayRight[sizeTwo - 1]) {
    memoization[sizeOne - 1][sizeTwo - 1] =
      1 + lcs(arrayLeft, arrayRight, sizeOne - 1, sizeTwo - 1, memoization);
    return memoization[sizeOne - 1][sizeTwo - 1];
  }
  memoization[sizeOne - 1][sizeTwo - 1] = Math.max(
    lcs(arrayLeft, arrayRight, sizeOne, sizeTwo - 1, memoization),
    lcs(arrayLeft, arrayRight, sizeOne - 1, sizeTwo, memoization),
  );
  return memoization[sizeOne - 1][sizeTwo - 1];
};

const memoization: number[][] = [];
const arrayLeft: string[] = graph.userNodes[0].musics;
const arrayRight: string[] = graph.userNodes[1].musics;

for (let i = 0; i < arrayLeft.length + 1; i += 1) {
  const aux: number[] = [];
  for (let j = 0; j < arrayRight.length + 1; j += 1) {
    aux.push(-1);
  }
  memoization.push(aux);
}
console.log(
  lcs(arrayLeft, arrayRight, arrayLeft.length, arrayRight.length, memoization),
);

export default lcs;
